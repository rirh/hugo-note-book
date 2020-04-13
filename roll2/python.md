{%  extends "../blocks.md"  %}
{%  block contain  %}

##### python



 构建一项软件设计有两种方式：一种是将软件设计得足够简单以至于明显找不到缺陷；另一种是软件设计得足够复杂以至于找不到明显的缺陷。

​                                                                                                  ——查尔斯·安东尼·理查德·霍尔爵士（C. A. R. Hoare）



- 安装

  ```shell
  $ brew install python3
  $ python3 -V
  Python 3.7.6
  ```

- 第一步

  在你的操作系统中打开终端（Terminal）程序输入 `python3`进入 *Python 解释器*
  可以在此练习python的相关基本语法和流程语句

- 基础

  ```python
  print('hello world') #注意到 print 是一个函数
  # 这是注释
  # 字面常量
  例如一个数字，一串字符串都属于字面常量（Literal Constants）
  因为它的值不能被改变。因此，所有的这些都被称作字面常量
  # 数字
  数字主要分为两种类型——整数（Integers）与浮点数（Floats）
  （没有单独的 long 类型。int 类型可以指任何大小的整数。）
  # 字符串
  一串字符串（String）是 字符（Characters） 的 序列（Sequence）
  通俗的来说是普通的一串字符串，（注意里面的换行转移及其其他的处理）
  单引号 双引号 三引号 分别是三种字符串的用法
  例：
  'Quote me on this'
  "What's your name?" 
  '''
  This is the second line.
  "What's your name?," I asked.
  He said "Bond, James Bond."
  '''
  （ps:字符串是不可变的）
  字符串格式化
  例：
  age = 20
  name = 'Swaroop'
  print('{0} was {1} years old when he wrote this book'.format(name, age))
  print('Why is {0} playing with that python?'.format(name))
  输出
  Swaroop was 20 years old when he wrote this book
  Why is Swaroop playing with that python
  原始字符串
  需要在字符串前增加 r 或 R 来指定一个 原始（Raw） 字符串
  例：
  r"Newlines are indicated by \n"
  #逻辑行与物理行
  所谓物理行（Physical Line）是你在编写程序时 你所看到 的内容。所谓逻辑行（Logical Line）是 Python 所看到 的单个语句。Python 会假定每一 物理行 会对应一个 逻辑行。
  例：
  i = \
  5
  》〉》〉》
  i = 5
  强烈建议对于每一行物理行最多只写入一行逻辑行
  #缩进
  缩进对于python语句来说非常重要，代码运行的逻辑和缩进有密切的关系
  例如
  i = 5
  # 下面将发生错误，注意行首有一个空格
   print('Value is', i)
  print('I repeat, the value is', i)
  这段代码由于缩进问题无法通过编译，输出为：
   File "xxx.py", line 3
      print('Value is', i)
      ^
  IndentationError: unexpected indent
  # 缩进错误：意外缩进
  ```
  
- 运算符

  ```python
  加减乘除
  2+3 >>> 5
  3-2 >>> 1
  2*3 >>> 6
  4/2 >>> 2
  // （整除）
  x 除以 y 并对结果向下取整至最接近的整数
  20/3 >>> 6
  % （取模）
  返回除法运算后的余数
  14%3 >>> 2
  << （左移）
  将数字的位向左移动指定的位数。（每个数字在内存中以二进制数表示，即 0 和1）
  2<<4 >>> 32
  >> （右移）
  将数字的位向右移动指定的位数
  32 >> 2 >>> 8
  & （按位与）
  对数字进行按位与操作
  3 & 1 输出 1
  | （按位或）
  对数字进行按位或操作
  5 | 3 >>> 7
  ^（按位异或）
  对数字进行按位异或操作
  2^3 >>>1
  ~（按位取反）
  x 的按位取反结果为 -(x+1)。
  ~7 >>> -8
  逻辑判断
  以下运算均返回布尔值
  < （小于）
  > （大于）
  <= （小于等于）
  >= （大于等于）
  == （等于）
  != （不等于）
  not （布尔“非”）
  and （布尔“与”）
  or（布尔“或”）
  
  求值顺序
  2 + 3 * 4  >>>  3*4 >>> 2+12 >>>14
  当然 使用小括号可以改变运算顺序
  下面列出优先级权重（从高到低）
  :=    ：Assignment 表达式
  lambda：Lambda  表达式
  if - else ：条件表达式
  or：布尔“或”
  ：布尔“与”
  not x：布尔“非”
  in, not in, is, is not, <, <=, >, >=, !=, ==：比较，包括成员资格测试（Membership Tests）和身份测试（Identity Tests）。
  |：按位或
  ^：按位异或
  &：按位与
  <<, >>：移动
  +, -：加与减
  *, /, //, %：乘、除、整除、取余
  +x, -x, ~x：正、负、按位取反
  **：求幂
  x[index], x[index:index], x(arguments...), x.attribute：下标、切片、调用、属性引用
  (expressions...), [expressions...], {key: value...}, {expressions...}：表示绑定或元组、表示列表、表示字典、表示集合
  ```

- 控制流

  ```python
  # 在 Python 中有三种控制流语句——if for 和 while。
  if 语句
  number = 23
  guess = int(input('Enter an integer : '))
  
  if guess == number:
      # 新块从这里开始
      print('Congratulations, you guessed it.')
      print('(but you do not win any prizes!)')
      # 新块在这里结束
  elif guess < number:
      # 另一代码块
      print('No, it is a little higher than that')
      # 你可以在此做任何你希望在该代码块内进行的事情
  else:
      print('No, it is a little lower than that')
      # 你必须通过猜测一个大于（>）设置数的数字来到达这里。
  
  print('Done')
  # 这最后一句语句将在
  # if 语句执行完毕后执行。
  
  while语句
  number = 23
  running = True
  while running:
      guess = int(input('Enter an integer : '))
  
      if guess == number:
          print('Congratulations, you guessed it.')
          # 这将导致 while 循环中止
          running = False
      elif guess < number:
          print('No, it is a little higher than that.')
      else:
          print('No, it is a little lower than that.')
  else:
      print('The while loop is over.')
      # 在这里你可以做你想做的任何事
  
  print('Done')
  
  for 语句
  for i in range(1, 5):
      print(i)
  else:
      print('The for loop is over')
      
  break 和 continue 也具有控制流程的能力
  
  while True:
      s = input('Enter something : ')
      if s == 'quit':
          break
      print('Length of the string is', len(s))
  print('Done')
  
  while True:
      s = input('Enter something : ')
      if s == 'quit':
          break
      if len(s) < 3:
          print('Too small')
          continue
      print('Input is of sufficient length')
      # 自此处起继续进行其它任何处理
  ```

- 函数

  ```python
  def foo():
      # 该块属于这一函数
      print('hello world')
  # 函数结束
  
  foo()  # 调用函数
  foo()  # 再次调用函数
  
  # 参数
  def print_max(a, b):
      if a > b:
          print(a, 'is maximum')
      elif a == b:
          print(a, 'is equal to', b)
      else:
          print(b, 'is maximum')
  
  # 直接传递字面值
  print_max(3, 4)
  
  x = 5
  y = 7
  
  # 以参数的形式传递变量
  print_max(x, y)
  # 局部变量
  x = 50
  def func(x):
      print('x is', x)
      x = 2
      print('Changed local x to', x)
  func(x)
  print('x is still', x)
  # python function_local.py
  # 3x is 50
  # Changed local x to 2
  # x is still 50
  
  global 语句
  x = 50
  def func():
      global x
  
      print('x is', x)
      x = 2
      print('Changed global x to', x)
  func()
  print('Value of x is', x)
  
  # python function_global.py
  # x is 50
  # Changed global x to 2
  # Value of x is 2
  # global 语句用以声明 x 是一个全局变量——因此，当我们在函数中为 x 进行赋值时，这一改动将影响到我们在主代# # 码块中使用的 x 的值
  
  
  # 默认参数值
  def say(message, times=1):
      print(message * times)
  
  say('Hello')
  say('World', 5)
  # python function_default.py
  # Hello
  # WorldWorldWorldWorldWorld
  
  # 关键字参数
  def func(a, b=5, c=10):
      print('a is', a, 'and b is', b, 'and c is', c)
  
  func(3, 7)
  func(25, c=24)
  func(c=50, a=100)
  
  # a is 3 and b is 7 and c is 10
  # a is 25 and b is 5 and c is 24
  # a is 100 and b is 5 and c is 50
  # 这个传值方式很神奇是我很喜欢的一种方式
  
  def total(a=5, *numbers, **phonebook):
      print('a', a)
  
      #遍历元组中的所有项目
      for single_item in numbers:
          print('single_item', single_item)
  
      #遍历字典中的所有项目
      for first_part, second_part in phonebook.items():
          print(first_part,second_part)
  
  print(total(10,1,2,3,Jack=1123,John=2231,Inge=1560))
  # python function_varargs.py
  # a 10
  # single_item 1
  # single_item 2
  # single_item 3
  # Inge 1560
  # John 2231
  # Jack 1123
  # None
  
  def maximum(x, y):
      if x > y:
          return x
      elif x == y:
          return 'The numbers are equal'
      else:
          return y
  
  print(maximum(2, 3))
  ```

- 模块

  ```python
  import sys
  
  print('The command line arguments are:')
  for i in sys.argv:
      print(i)
  
  print('\n\nThe PYTHONPATH is', sys.path, '\n')
  
  # python module_using_sys.py we are arguments
  # The command line arguments are:
  # we
  # are
  # arguments
  from..import 语句
  如果你希望直接将 argv 变量导入你的程序（为了避免每次都要输入 sys.），那么你可以通过使用 from sys import argv 语句来实现这一点。
  if __name__ == '__main__':
      print('This program is being run by itself')
  else:
      print('I am being imported from another module')
      
  def say_hi():
      print('Hi, this is mymodule speaking.')
  
  __version__ = '0.1'
  import mymodule
  
  mymodule.say_hi()
  print('Version', mymodule.__version__)
  __init__ __main__
  # 函数是程序中的可重用部分那般，模块是一种可重用的程序。包是用以组织模块的另一种层次结构
  ```

  




{%  endblock   %}

