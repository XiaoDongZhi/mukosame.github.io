(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{533:function(a,t,s){"use strict";s.r(t);var e=s(4),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("异常处理：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("02-18 01:55:53.647: W/System.err(29102): java.lang.IllegalStateException: The specified child already has a parent. You must call removeView() on the child's parent first.\n02-18 01:55:53.647: W/System.err(29102): \tat android.view.ViewGroup.addViewInner(ViewGroup.java:3570)\n02-18 01:55:53.657: W/System.err(29102): \tat android.view.ViewGroup.addView(ViewGroup.java:3423)\n02-18 01:55:53.657: W/System.err(29102): \tat android.view.ViewGroup.addView(ViewGroup.java:3399)\n02-18 01:55:53.657: W/System.err(29102): \tat com.example.cameraenhance.GpsInfo.onCreate(GpsInfo.java:86)\n02-18 01:55:53.667: W/System.err(29102): \tat android.app.Activity.performCreate(Activity.java:5326)\n02-18 01:55:53.667: W/System.err(29102): \tat android.app.Instrumentation.callActivityOnCreate(Instrumentation.java:1090)\n02-18 01:55:53.667: W/System.err(29102): \tat android.app.ActivityThread.performLaunchActivity(ActivityThread.java:2233)\n02-18 01:55:53.667: W/System.err(29102): \tat android.app.ActivityThread.handleLaunchActivity(ActivityThread.java:2319)\n02-18 01:55:53.667: W/System.err(29102): \tat android.app.ActivityThread.access$1100(ActivityThread.java:135)\n02-18 01:55:53.677: W/System.err(29102): \tat android.app.ActivityThread$H.handleMessage(ActivityThread.java:1232)\n02-18 01:55:53.677: W/System.err(29102): \tat android.os.Handler.dispatchMessage(Handler.java:102)\n02-18 01:55:53.677: W/System.err(29102): \tat android.os.Looper.loop(Looper.java:136)\n02-18 01:55:53.677: W/System.err(29102): \tat android.app.ActivityThread.main(ActivityThread.java:5234)\n02-18 01:55:53.677: W/System.err(29102): \tat java.lang.reflect.Method.invokeNative(Native Method)\n02-18 01:55:53.677: W/System.err(29102): \tat java.lang.reflect.Method.invoke(Method.java:515)\n02-18 01:55:53.677: W/System.err(29102): \tat com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:834)\n02-18 01:55:53.677: W/System.err(29102): \tat com.android.internal.os.ZygoteInit.main(ZygoteInit.java:650)\n02-18 01:55:53.677: W/System.err(29102): \tat dalvik.system.NativeStart.main(Native Method)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br")])]),s("p",[a._v("原因：\n代码大概如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("glSurfaceView = new MySurfaceView(this);\nsetContentView(glSurfaceView);\nframeLayout.addView(glSurfaceView, new LayoutParams(\n\t\t\t\t\tLayoutParams.FILL_PARENT, LayoutParams.FILL_PARENT));\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("对象"),s("code",[a._v("glSurfaceView")]),a._v("被"),s("code",[a._v("setContentView")]),a._v("调用后，再次被"),s("code",[a._v("addView")]),a._v("的方法调用后，则会抛出以上异常。")]),a._v(" "),s("hr"),a._v(" "),s("p",[a._v("将摄像头的surfaceview屏蔽不显示，glsurfaceview不会单独显示。以前记得是会呈现出黑背景的3D图像的。现在是透明的完全不呈现。\n"),s("activity",{attrs:{"android:name":".GpsInfo","android:configChanges":"orientation|keyboardHidden|screenSize|smallestScreenSize","android:theme":"@android:style/Theme.Translucent"}})],1),a._v(" "),s("p",[a._v("由于配置activity的时候theme配置的是"),s("code",[a._v("Theme.Translucent")]),a._v("也就是透明，所以不显示。")]),a._v(" "),s("hr"),a._v(" "),s("h2",{attrs:{id:"android-gravity与android-layout-gravity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#android-gravity与android-layout-gravity"}},[a._v("#")]),a._v(" android:gravity与android:layout_gravity")]),a._v(" "),s("p",[s("code",[a._v("android:gravity")]),a._v("：\n这个是针对控件里的元素来说的，用来控制元素在该控件里的显示位置。例如，在一个Button按钮控件中设置如下两个属性，")]),a._v(" "),s("p",[s("code",[a._v('android:gravity="left"')]),a._v("和"),s("code",[a._v('android:text="提交"')]),a._v("，这时Button上的文字“提交”将会位于Button的左部。")]),a._v(" "),s("p",[s("code",[a._v("android:layout_gravity")]),a._v("：\n这个是针对控件本身而言，用来控制该控件在包含该控件的父控件中的位置。同样，当我们在Button按钮控件中设置"),s("code",[a._v('android:layout_gravity="left"')]),a._v("属性时，表示该Button按钮将位于界面的左部。")]),a._v(" "),s("hr"),a._v(" "),s("h2",{attrs:{id:"linearlayout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linearlayout"}},[a._v("#")]),a._v(" LinearLayout")]),a._v(" "),s("p",[a._v("LinearLayout按照垂直或者水平的顺序依次排列子元素，每一个子元素都位于前一个元素之后。")]),a._v(" "),s("p",[a._v("如果是垂直排列，那么将是一个N行单列的结构，每一行只会有一个元素，而不论这个元素的宽度为多少；\n如果是水平排列，那么将是一个单行N列的结构。\n如果搭建两行两列的结构，通常的方式是先垂直排列两个元素，每一个元素里再包含一个LinearLayout进行水平排列。")]),a._v(" "),s("p",[a._v("LinearLayout中的子元素属性android:layout_weight生效，它用于描述该子元素在剩余空间中占有的大小比例。\n假如一行只有一个文本框，那么它的默认值就为0，如果一行中有两个等长的文本框，那么他们的android:layout_weight值可以是同为1。\n如果一行中有两个不等长的文本框，那么他们的android:layout_weight值分别为1和2，那么第一个文本框将占据剩余空间的三分之二，第二个文本框将占据剩余空间中的三分之一。"),s("code",[a._v("android:layout_weigh")]),a._v("t遵循数值越小，重要度越高的原则")]),a._v(" "),s("hr"),a._v(" "),s("h2",{attrs:{id:"layout-width与width的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#layout-width与width的区别"}},[a._v("#")]),a._v(" layout_width与width的区别")]),a._v(" "),s("p",[s("code",[a._v("android:width")]),a._v(" 是定义控件上文字（TextView）的宽度\n"),s("code",[a._v("android:width")]),a._v(' 的值，一般是 "100dp" 这样的数值;\n'),s("code",[a._v("android:layout_width")]),a._v(" 的值，一般是"),s("code",[a._v("fill_parent")]),a._v(","),s("code",[a._v("wrap_content")]),a._v(","),s("code",[a._v("match_parent")]),a._v(".当然，它也可以像前者一样，设置数值的.")]),a._v(" "),s("p",[a._v("带"),s("code",[a._v("layout_")]),a._v("的属性是指整个控件而言的，是与父控件之间的关系，如 "),s("code",[a._v("layout_gravity")]),a._v(" 在父控件中的对齐方式, "),s("code",[a._v("layout_margin")]),a._v(" 是级别相同的控件之间的间隙等等；")]),a._v(" "),s("p",[a._v("不带"),s("code",[a._v("layout_")]),a._v(" 的属性是指控件中文本的格式，如gravity是指文本的对齐方式等等，而其中文本的格式又受制约于它的控件在父控件中的属性.")]),a._v(" "),s("p",[s("code",[a._v('android:scaleType="matrix"')]),a._v(" "),s("code",[a._v("android:scaleType")]),a._v("是控制图片如何"),s("code",[a._v("resized/moved")]),a._v("来匹对ImageView的size。")]),a._v(" "),s("hr"),a._v(" "),s("h2",{attrs:{id:"_3d图像的放大缩小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3d图像的放大缩小"}},[a._v("#")]),a._v(" 3D图像的放大缩小")]),a._v(" "),s("p",[s("code",[a._v("Matrix.scaleM(currMatrix, 0, x, y, z);")]),a._v("\n即可实现3D图像的放大缩小")]),a._v(" "),s("hr"),a._v(" "),s("h2",{attrs:{id:"viewgroup-layoutparams布局参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#viewgroup-layoutparams布局参数"}},[a._v("#")]),a._v(" ViewGroup.LayoutParams布局参数##")]),a._v(" "),s("p",[a._v("ViewGroup.LayoutParams的FILL_PARENT与MATCH_PARENT两个常量的值是相等的。\nLayoutParams.WRAP_CONTENT：一个view控件在布局中的大小为刚好包裹住该控件的大小\nFILL_PARENT和MATCH_PARENT是说子控件与父控件大小相等。")]),a._v(" "),s("hr"),a._v(" "),s("p",[a._v("View 和 FrameLayout 是包含关系，FrameLayout 继承自ViewGroup，然后继承自View。")]),a._v(" "),s("p",[a._v("FrameLayout是一种 ViewGroup，可以在里面放其它的View，它的布局方式就是简单的把每个子 View 放到最左上角，这样可以做一些切换、渐变等等效果，当然你可以设置 Gravity 之类的属性来进行布局。")]),a._v(" "),s("p",[a._v("framelayout上添加SurfaceView用于摄像头预览。\ntextView作为文字内容显示。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("textview "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TextView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("addContentView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("textview"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LayoutParams")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LayoutParams")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("MATCH_PARENT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LayoutParams")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("MATCH_PARENT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("效果如下：\n"),s("img",{attrs:{src:"/images/android/error_text.jpg",alt:"title"}}),a._v(".")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("textview "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TextView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("addContentView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("textview"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LayoutParams")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LayoutParams")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("WRAP_CONTENT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LayoutParams")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("WRAP_CONTENT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("效果如下：\n"),s("img",{attrs:{src:"/images/android/right_text.jpg",alt:"title"}})]),a._v(" "),s("hr"),a._v(" "),s("h2",{attrs:{id:"给3d试图增加触控缩放功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#给3d试图增加触控缩放功能"}},[a._v("#")]),a._v(" 给3D试图增加触控缩放功能")]),a._v(" "),s("p",[a._v("先说下能力吧，就是常见的双点触控，两个手指靠近缩小，展开放大。\n使用到接口，"),s("code",[a._v("ScaleGestureDetector.SimpleOnScaleGestureListener")])]),a._v(" "),s("p",[a._v("ScaleGestureDetector接口实现：")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScaleListener")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScaleGestureDetector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SimpleOnScaleGestureListener")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("onScale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScaleGestureDetector")]),a._v(" detector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n\t\t\tmRenderer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("scaleFactor "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*=")]),a._v(" detector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getScaleFactor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// don't let the object get too small or too large.")]),a._v("\n\t\t\tmRenderer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("scaleFactor "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Math")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("max")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.01f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Math")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("min")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("mRenderer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("scaleFactor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5.0f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br")])]),s("p",[a._v("使用方法：")]),a._v(" "),s("p",[a._v("实例化：\nGlSurfaceView实例化方法中实例化一个ScaleGestureDetector。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("scaleGestureDetector "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScaleGestureDetector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScaleListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("调用处：\n在GlSurfaceView的"),s("code",[a._v("onTouchEvent")]),a._v("方法中调用")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("scaleGestureDetector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("onTouchEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("`\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("这样就可以实现触控缩放了。")])])}),[],!1,null,null,null);t.default=n.exports}}]);