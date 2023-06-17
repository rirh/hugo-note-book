## 利用git的diff制作补丁包

```
git diff-tree -r --name-only --no-commit-id HEAD | xargs zip ~/Desktop/1.zip
```

