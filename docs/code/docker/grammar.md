# mysql语法

## MySQL简介

MySQL是一个关系型数据库管理系统，由瑞典MySQL AB公司开发，目前属于Oracle旗下产品。它广泛应用于各种规模的项目中，以其稳定性和灵活性著称。

## 数据库操作

### 创建数据库

创建数据库的基本语法如下：

`CREATE DATABASE database_name;` 

其中，`database_name`是你想要创建的数据库名称。例如：

`CREATE DATABASE my_database;` 

### 使用数据库

创建数据库后，需要使用该数据库才能在其上执行其他操作。使用数据库的语法为：

`USE database_name;` 

例如：

`USE my_database;` 

### 删除数据库

删除数据库的语法如下：

`DROP DATABASE [IF EXISTS] database_name;` 

其中，`IF EXISTS`是一个可选参数，用于在数据库不存在时避免错误。

## 数据表操作

### 创建数据表

创建数据表的基本语法如下：

`CREATE TABLE table_name (      column1 datatype,    column2 datatype,    ...  );` 

例如：

`CREATE TABLE students (      id INT AUTO_INCREMENT PRIMARY KEY,    name VARCHAR(50),    age INT  );` 

### 修改数据表

修改数据表的语法如下：

`ALTER TABLE table_name  ADD COLUMN column_name datatype,  ADD CONSTRAINT constraint_name PRIMARY KEY (column_name);` 

例如：

`ALTER TABLE students  ADD COLUMN email VARCHAR(100);` 

### 删除数据表

删除数据表的语法如下：

`DROP TABLE table_name;` 

例如：

`DROP TABLE students;` 

## SQL语句分类

### DDL（Data Definition Language）

DDL用于定义数据库的结构和组件，包括创建、修改和删除数据库对象的命令，如表、视图、索引等。常见的DDL命令包括：

- `CREATE`
- `ALTER`
- `DROP`

### DML（Data Manipulation Language）

DML用于在数据库中操作数据，包括查询、插入、更新和删除数据库中的数据。常见的DML命令包括：

- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

### DCL（Data Control Language）

DCL用于控制数据库用户的访问权限和安全性，包括授权和回收访问权限的命令。常见的DCL命令包括：

- `GRANT`
- `REVOKE`

## 连接数据库

连接数据库的基本语法如下：

`mysql -h hostname -P port -u username -p` 

其中：

- `-h`：指定连接数据库的主机名或IP地址。
- `-P`：指定连接数据库的端口号，MySQL的默认端口是3306。
- `-u`：指定连接到MySQL服务器时要使用的用户名。
- `-p`：这个选项告诉MySQL提示输入与提供的用户名相关联的密码。

## 常用优化方式

### 隐式转换

隐式转换是指不带转换类型的转换，当一个字段类型为varchar，但是在判断时SQL是用int去判断，MySQL就会对这个int进行隐式转换，将其int类型转换为varchar。隐式转换不一定会导致索引失效，而是根据索引的类型变化。

### 分区功能

分区功能并不是在存储引擎层完成的，因此不是只有InnoDB存储引擎支持分区，常见的存储引擎MyISAM、NDB等都支持。MySQL在5.1版本时添加了对分区的支持。

以上就是MySQL的基础语法概述，希望对你有所帮助！
