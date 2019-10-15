

{%  block header  %}
  <div id="header"  >
  <script>
    (function(){
        const style = `
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transition: all .3ms;
        height:${document.documentElement.clientHeight-50}px
        `
        var dom = document.getElementById('header');
        dom.setAttribute('style',style)
    }())
  </script>
  <div class="card" >
    <p style="font:60px 'Italiana', sans-serif; font-weight: bold;">{{page.title}}</p>
    <strong>My Life Getting Better !</strong>
  </div>
  </div>
{%  endblock  %}
{%  block contain  %}
   这里可以定义默认值
   如果不定义默认值，则表示空字符串
{%  endblock  %}
{%  block footer  %}
   这里可以定义默认值
   如果不定义默认值，则表示空字符串
{%  endblock  %}