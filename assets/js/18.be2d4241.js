(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{521:function(s,a,e){"use strict";e.r(a);var n=e(4),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("主机组面向的是管理员;\nAvailable Zone面向的是所有用户")]),s._v(" "),e("p",[s._v("Available Zone下包含若干主机组。")]),s._v(" "),e("p",[s._v("一个主机可以存在多个主机组内\n一个主机组可以包含多个key-value对\n同一个key-value对可以被分配到多个主机组上")]),s._v(" "),e("hr"),s._v(" "),e("p",[s._v("用户创建的虚拟机的时候选择的availablitity-zone。\nnova-schedule将该虚拟机调度到属于对应availability-zone下的主机组下的主机。如"),e("code",[s._v("host1")]),s._v("。\n此时如果将"),e("code",[s._v("host1")]),s._v("从原主机组删除，将host1添加到属于另外一个availability-zone的主机组下，如新availability-zone为"),e("code",[s._v("Xi'An")]),s._v("，则原虚拟机的az属性也将更新为"),e("code",[s._v("Xi'An")]),s._v(".")]),s._v(" "),e("hr"),s._v(" "),e("p",[s._v("openstack官网（http://docs.openstack.org/trunk/config-reference/content/section_compute-scheduler.html）\n关于nova schedule的说明中有个关于主机组的例子很形象：")]),s._v(" "),e("p",[s._v("Example: Specify compute hosts with SSDs\nThis example configures the Compute service to enable users to request nodes that have solid-state drives (SSDs). You create a fast-io host aggregate in the nova availability zone and you add the ssd=true key-value pair to the aggregate. Then, you add the node1, and node2 compute nodes to it.")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ nova aggregate-create fast-io nova\n+----+---------+-------------------+-------+----------+\n| Id | Name    | Availability Zone | Hosts | Metadata |\n+----+---------+-------------------+-------+----------+\n| 1  | fast-io | nova              |       |          |\n+----+---------+-------------------+-------+----------+\n\n$ nova aggregate-set-metadata 1 ssd=true\n+----+---------+-------------------+-------+-------------------+\n| Id | Name    | Availability Zone | Hosts | Metadata          |\n+----+---------+-------------------+-------+-------------------+\n| 1  | fast-io | nova  \t\t\t   | []    | {u'ssd': u'true'} |\n+----+---------+-------------------+-------+-------------------+\n\n$ nova aggregate-add-host 1 node1\n+----+---------+-------------------+-----------+--------------------+\n| Id | Name    | Availability Zone | Hosts     | Metadata           |\n+----+---------+-------------------+------------+-------------------+\n| 1  | fast-io | nova  \t\t\t   | [u'node1']| {u'ssd': u'true'}  |\n+----+---------+-------------------+------------+-------------------+\n\n$ nova aggregate-add-host 1 node2\n+----+---------+-------------------+---------------------+-------------------+\n| Id | Name    | Availability Zone | Hosts               | Metadata          |\n+----+---------+-------------------+----------------------+-------------------+\n| 1  | fast-io | nova              | [u'node1', u'node2']| {u'ssd': u'true'}  |\n+----+---------+-------------------+----------------------+-------------------+\nUse the nova flavor-create command to create the ssd.large flavor called with an ID of 6, 8 GB of RAM, 80 GB root disk, and four vCPUs.\n\n$ nova flavor-create ssd.large 6 8192 80 4\n+----+-----------+-----------+------+-----------+------+-------+-------------+-----------+-------------+\n| ID | Name      | Memory_MB | Disk | Ephemeral | Swap | VCPUs | RXTX_Factor   | Is_Public | extra_specs |\n+----+-----------+-----------+------+-----------+------+-------+-------------+-----------+-------------+\n| 6  | ssd.large | 8192   | 80      | 0         |      | 4     |1              | True      | {}          |\n+----+-----------+-----------+------+-----------+------+-------+-------------+-----------+-------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br")])]),e("p",[s._v("Once the flavor is created, specify one or more key-value pairs that match the key-value pairs on the host aggregates. In this case, that is the ssd=true key-value pair. Setting a key-value pair on a flavor is done using the nova flavor-key command.")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ nova flavor-key ssd.large set  ssd=true\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Once it is set, you should see the extra_specs property of the ssd.large flavor populated with a key of ssd and a corresponding value of true.")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ nova flavor-show ssd.large\n+----------------------------+-------------------+\n| Property                   | Value             |\n+----------------------------+-------------------+\n| OS-FLV-DISABLED:disabled   | False             |\n| OS-FLV-EXT-DATA:ephemeral  | 0                 |\n| disk                       | 80                |\n| extra_specs                | {u'ssd': u'true'} |\n| id                         | 6                 |\n| name                       | ssd.large         |\n| os-flavor-access:is_public | True              |\n| ram                        | 8192              |\n| rxtx_factor                | 1.0               |\n| swap                       |                   |\n| vcpus                      | 4                 |\n+----------------------------+-------------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("p",[s._v("Now, when a user requests an instance with the ssd.large flavor, the scheduler only considers hosts with the ssd=true key-value pair. In this example, these are node1 and node2.")])])}),[],!1,null,null,null);a.default=t.exports}}]);