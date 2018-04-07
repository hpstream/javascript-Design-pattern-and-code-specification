# 数据库
## SQL structured query language
### 插入数据
insert into 表名 (字段列表) values (数据列表)
insert user (username,password,age) values ('lisi','123',12);
### 修改数据
update 表名 set 字段名称=字段值,字段名称=字段值,.... where 条件
update user set username='wangwu123',`password` = '123456' where id = 12 or username='wang'
### 删除数据
delete from 表名 where 条件
delete from user where id=1 and username='lisi'
### 查询数据
select */字段列表 from 表名 where 条件
select username as un from user
### 分页查询
- limit参数一：查询开始的位置（从0开始）
- limit参数二：每次查询多少条数据
select * from user limit 1,3

### 多表查询 (联合查询)
select `user`.username,depart.depart from user,depart where `user`.departid = depart.id
select u.username,d.depart from user u,depart d where u.departid = d.id






