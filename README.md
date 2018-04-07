# 目录 
   - [1.为什要遵守代码规范](#1.为什要遵守代码规范)
   - [2.css代码规范](#2.css代码规范)
   - [3.js代码规范与设计模式](./codeSpecification/js/1.js代码规范.md)
        - [3.1 js代码规范](./codeSpecification/js/1.js代码规范.md)
        - [3.2 设计模式](./codeSpecification/js/单例模式.md)
   - [4.关于混合式开发的总结](https://hpstream.github.io/javascript-Design-pattern-and-code-specification/doc/preview/hybrid.html)
   - [5.关于reactNative总结](https://hpstream.github.io/javascript-Design-pattern-and-code-specification/doc/reactNative/README.html)
   - [6.sql基本操作](https://hpstream.github.io/javascript-Design-pattern-and-code-specification/doc/mysql/REASME.md)

# 1为什要遵守代码规范
软件bug的修复是昂贵的，并且随着时间的推移，这些bug的成本也会增加，尤其当这些bug潜伏并慢慢出现在已经发布的软件中时。当你发现bug 的时候就立即修复它是最好的，此时你代码要解决的问题在你脑中还是很清晰的。否则，你转移到其他任务，忘了那个特定的代码，一段时间后再去查看这些代码就 需要：

 -  花时间学习和理解这个问题
 -  花时间是了解应该解决的问题代码
 -  还有问题，特别对于大的项目或是公司，修复bug的这位伙计不是写代码的那个人（且发现bug和修复bug的不是同一个人）。因此，必须降低理解代 码花费的时间，无论是一段时间前你自己写的代码还是团队中的其他成员写的代码。这关系到底线（营业收入）和开发人员的幸福，因为我们更应该去开发新的激动 人心的事物而不是花几小时几天的时间去维护遗留代码。

**另一个相关软件开发生命的事实是，读代码花费的时间要比写来得多。有时候，当你专注并深入思考某个问题的时候，你可以坐下来，一个下午写大量的代码。**

你的代码很能很快就工作了，但是，随着应用的成熟，还会有很多其他的事情发生，这就要求你的进行进行审查，修改，和调整。例如：

-  bug是暴露的
-  新功能被添加到应用程序
-  程序在新的环境下工作（例如，市场上出现新想浏览器）
-  代码改变用途
-  代码得完全从头重新，或移植到另一个架构上或者甚至使用另一种语言

**由于这些变化，很少人力数小时写的代码最终演变成花数周来阅读这些代码。这就是为什么创建可维护的代码对应用程序的成功至关重要。**

> 可维护的代码意味着：
-  可读的
-  一致的
-  可预测的
- 看上去就像是同一个人写的
-  已记录

# 2.css代码规范
  1.css使用虽然很简单，但在在一个复杂的项目中，泛滥而自由的写css,这会出现很多问题。

## 2.1 项目中出现的问题
- 1 有时候开发的时候为了防止和别人css,冲突，我们会把名字取的非常非常longer,这其实是没有必要的。
- 2 有时候我们按照语意进行命名，如：‘help-guest-regist’，这样导致不能复用。
- 3 有时候学写许多无用的代码。 ‘#login .a .b, #login .a .c’.这其实也是很没有必要的。

>经历过几年上班经验的总结，和在无意中参考张旭鑫老师的[面向属性的命名](http://www.zhangxinxu.com/wordpress/2010/09/%E7%B2%BE%E7%AE%80%E9%AB%98%E6%95%88%E7%9A%84css%E5%91%BD%E5%90%8D%E5%87%86%E5%88%99%E6%96%B9%E6%B3%95/)。终于找到了一套比较规范的标准。

[我自己按照标准和规范制定了一套css](https://hpstream.github.io/javascript-Design-pattern-and-code-specification/css/index.html)，采用less写的，非常简单，大家去自己公司，可以为公司制定一套标准，提供公司使用。

## 2.2 less与sass
在使用写组建的时候我们需要使用less和sass,进行扩展。提高效率。
###2.2.1 [less官网](http://www.bootcss.com/p/lesscss/#docs)
###2.2.2 [sass官网](https://www.sass.hk/)

**注意：sass的文件格式分成两种，一个是.scss(不严格语法)，一个是.sass(严格语法)**




