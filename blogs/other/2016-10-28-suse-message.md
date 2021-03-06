---

title: 解决suse操作系统没有message日志的问题
categories: blog
---
*声明：本博客欢迎转发，但请保留原作者信息! 内容系本人学习、研究和总结，如有雷同，实属荣幸！*
 
*新浪微博：[@支支zHi小冬](http://weibo.com/u/1596536485/home?wvr=5)*

*博客地址：[http://xiaodongzhi.github.io/](http://xiaodongzhi.github.io/)*

*联系邮箱：517341003@qq.com*

 


## 背景

工作中有用到通过pxe在内存中加载一个miniOs。该miniOS是以suse 11.1操作系统为基础，进行了裁剪，仅保留了基础软件以及必要的硬件驱动。

## 问题

架设PXE服务器，配置好DHCP相关配置。
TFTP上保存该miniOS的initrd以及vmlinuz

而miniOS中预制系统启动脚本，脚本中会使用ifup-dhcp命令在每个网卡上启动dhcp。尝试获取IP地址。

在某款服务器的网卡上获取IP的ifup-dhcp命令总是执行失败，但是过一会IP地址还是能获取到。

一般操作系统进程的日志都会在/var/log/messages里面保存。

可是查询发现miniOS里面没有messages日志。

为了通过messages日志查看相关错误日志，开启了以下恢复messages日志的旅程

## 恢复过程 ##
rpm -qa 查询发现没有syslog-ng，syslog，也没有klog。//说明裁剪的有点彻底啊。

尝试安装syslog-ng。提示依赖：
klog
syslogd
libnet.so.0

由于miniOS是在内存中运行，将以上三个rpm包上传到miniOS后，使用rpm -ivh xxx.rpm后，发现......擦！安装需要xxM空间。目测内存中的miniOS空间不足无法安装。

无奈只能，分别解压rpm包。
解压rpm包的命令：
rpm2cpio  xxx.rpm|cpio -divm ./
既可以将rpm包解压到rpm指定的目录。

解压顺序：klog，libnet，syslog-ng。

解压完成后，执行/etc/init.d/syslogd restart。
提示启动成功。

查询/var/log/目录下，有messages了。。。


## 问题分析 ##
linux上涉及到日志的问题，第一时间想到的就是syslog。翻阅linux中syslog相关资料，如下图：
![](http://i.imgur.com/hjdRMZ7.png)



- 内核空间，linux内核提供了printk方法，用于系统进程调用进行消息日志打印，系统进程作为信息，日志的生产者，产生的日志会保存在Ring Buffer中。保存在Ring Buffer中的日志消息，在用户空间可以使用很多工具进行查看，如/dev/kmsg，dmesg，klogd或者syslog

- 用户空间，在标准的Linux系统上，用户空间的守护进程klogd从纪录缓冲区中获取内核消息，再通过syslogd守护进程把这些消息保存在系统日志文件中。klogd进程既可以从/proc/kmsg文件中，也可以通过syslog()系统调用读取这些消息。默认情况下，它选择读取/proc方式实现。klogd守护进程在消息缓冲区有新的消息之前，一直处于阻塞状态。一旦有新的内核消息，klogd被唤醒，读出内核消息并进行处理。默认情况下，处理例程就是把内核消息传给syslogd守护进程。
syslogd守护进程一般把接收到的消息写入/var/log/messages文件中。不过，还是可以通过/etc/syslog.conf文件来进行配置，可以选择其他的输出文件。
参考：https://www.google.com.hk/url?sa=i&rct=j&q=&esrc=s&source=imgres&cd=&ved=0ahUKEwjG48r96f3PAhWIjZQKHUD3A2MQjxwIAw&url=%68%74%74%70%3a%2f%2f%74%65%63%68%76%6f%6c%76%65%2e%62%6c%6f%67%73%70%6f%74%2e%63%6f%6d%2f%32%30%31%34%2f%30%35%2f%6c%69%6e%75%78%2d%6c%6f%67%2d%6d%65%73%73%61%67%69%6e%67%2d%61%72%63%68%69%74%65%74%75%72%65%2e%68%74%6d%6c&psig=AFQjCNHvW_Nxwj8tomWIqYqpwEGWgTa4dg&ust=1477755385478827

故messages日志，依赖klog，syslog。缺一不可。