# xapge-devtools

全局安装 `xpage-devtools`: `npm i -g xpage-devtools` ，然后在 `src/materials/blocks` 目录下面执行

```bash
xpage init block <your-block-name>
```

会拉取block模板并创建在当前blocks目录下。

init项目时需要填写以下字段：

```
name                没用到，vue-cli自动添加的，无需修改，不能为中文
block Chinese title block的中文名称
version             版本
author              作者邮箱
description         block的描述
categories          block的分类，单选
```