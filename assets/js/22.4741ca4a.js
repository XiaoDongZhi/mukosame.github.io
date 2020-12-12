(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{526:function(v,e,_){"use strict";_.r(e);var c=_(4),o=Object(c.a)({},(function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("Openstack中的Volume数据Cinder中快存储的概念，用于虚拟机使用。\nvolume有很多中文称呼（不知道大家平时这样叫准确不）：卷，硬盘，云磁盘。")]),v._v(" "),_("p",[v._v("今天创建volume一直失败，日志一直提示：\n![title](/images/openstack/cinder/no valid host.jpg).")]),v._v(" "),_("p",[v._v("反复检查了cinder的配置文件"),_("code",[v._v("cinder.conf")]),v._v("中，关于backend的配置：\n"),_("img",{attrs:{src:"/images/openstack/cinder/cinder.conf.jpg",alt:"title"}}),v._v(".")]),v._v(" "),_("p",[v._v("然后再反复看下cinder schedule的日志。\n发现:\n![title](/images/openstack/cinder/LVM update log.jpg).")]),v._v(" "),_("p",[v._v("好吧，不知道这个从哪来的，为啥一直有这个日志打印。暂且先记着这个问题继续尝试下。\n将名为"),_("code",[v._v("default")]),v._v("的"),_("code",[v._v("volume_type")]),v._v("的"),_("code",[v._v("extra_specs")]),v._v("中的"),_("code",[v._v("volume_backend_name")]),v._v("的值修改为"),_("code",[v._v("LVM")]),v._v(".")]),v._v(" "),_("p",[v._v("重新创建volume。创建成功。\n![title](/images/openstack/cinder/succeed volume created.jpg).")]),v._v(" "),_("p",[v._v("在创建成功的喜悦同时，也陷入深深的疑问中。明明配置的"),_("code",[v._v("volume_backend_name")]),v._v("的值为"),_("code",[v._v("default")]),v._v("。为啥后来莫名其妙的变成"),_("code",[v._v("LVM")]),v._v("了？")]),v._v(" "),_("p",[v._v("总结以上描述的事实：\n1、创建volume的时候，选择的volume type指定的backend一定要是实实在在存在的，否则将无法找到合适的主机创建。")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("重启了devstack虚拟机后，发现。。。。我去。\nvgdisplay，pvscan都查询不到任何东西。\n但是在"),_("code",[v._v("/opt/stack/data")]),v._v("目录下磁盘文件还是存在的。\n查看了devstack的安装脚本stack.sh中关于vg相关代码。并且执行"),_("code",[v._v("sudo losetup -f --show stack-volumes-default-backing-file")]),v._v("后，vg，pv等均显示出来了。")]),v._v(" "),_("p",[v._v("至于losetup是干啥的？google之：")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("再次重启后，vgdisplay等等命令又查不到了。郁闷。。。\n决定手动创建vg。")]),v._v(" "),_("p",[v._v("由于我的openstack虚拟机磁盘本来就比较小，所以使用vmware workstations中虚拟机磁盘设置页面的“磁盘实用工具”的“扩展”磁盘容量功能。\n注：扩展磁盘需要关闭虚拟机情况下使用。扩展完成后，打开虚拟机")]),v._v(" "),_("p",[v._v("一、手动分区。需要手动为新增的磁盘空间进行分区。分区命令如下：\n1、"),_("code",[v._v("sudo fdisk /dev/sda")])]),v._v(" "),_("p",[v._v("2、"),_("code",[v._v("n")]),v._v(" 添加primary分区")]),v._v(" "),_("p",[v._v("3、"),_("code",[v._v("t")]),v._v(" 命令将新添加的分区类型修改为"),_("code",[v._v("8e")])]),v._v(" "),_("p",[v._v("4、配置成功后，输入"),_("code",[v._v("w")]),v._v("完成分区配置的保存。")]),v._v(" "),_("p",[v._v("5、"),_("code",[v._v("partprobe")]),v._v(" 使分区生效，无需重启。")]),v._v(" "),_("p",[v._v("二、完成分区后，创建pv\n1、"),_("code",[v._v("pvcreate /dev/sda4")]),v._v(" 创建pv")]),v._v(" "),_("p",[v._v("2、创建成功后，可以使用"),_("code",[v._v("pvdisplay")]),v._v("查看刚才创建的"),_("code",[v._v("pv")])]),v._v(" "),_("p",[v._v("三、创建vg\n1、"),_("code",[v._v("vgcreate cinder-volumes /dev/sda4")])]),v._v(" "),_("p",[v._v("2、创建成功后，可以使用"),_("code",[v._v("vgdisplay")]),v._v("查看刚才创建的"),_("code",[v._v("vg")])]),v._v(" "),_("p",[v._v("注："),_("code",[v._v("vg")]),v._v("名称要使用"),_("code",[v._v("cinder-volumes")]),v._v("，要不cinder启动的时候会报找不到该"),_("code",[v._v("vg")])]),v._v(" "),_("p",[v._v("搞定之后，重启"),_("code",[v._v("cinder-schedule")]),v._v("，"),_("code",[v._v("cinder-volume")]),v._v("。\n重新创建"),_("code",[v._v("volume")]),v._v("，创建成功。\n使用"),_("code",[v._v("lvdisplay")]),v._v("，可以看到刚才创建的"),_("code",[v._v("volume")]),v._v("对应的"),_("code",[v._v("lv")]),v._v("。\n"),_("code",[v._v("lv")]),v._v("的UUID等于cinder创建volume的ID")])])}),[],!1,null,null,null);e.default=o.exports}}]);