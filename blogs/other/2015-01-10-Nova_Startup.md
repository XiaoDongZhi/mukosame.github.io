---
title: Nova API之进程启动以及REST资源路由
categories: 云计算
tags: nova
---

首先从nova-api进程启动脚本出发，启动脚本为nova.cmd.all.py。


//TODO
1、`enabled_apis`具体信息在`nova.service`类中的CONF中描述。
2、启动WSGI服务使用到WSGIService类，对每一个WSGI app，构造一个WSGIService对象，使用launcher来启动。
