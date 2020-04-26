

{%  block header  %}
  <div id="header">
  <div class="card " >
    <p class="blocks-title " id="blocks-title">{{page.title}}</p>
    <strong class="verse">My Life Getting Better !</strong>
  </div>
  </div>
{%  endblock  %}
{%  block contain  %}
   这里可以定义默认值
   如果不定义默认值，则表示空字符串
{%  endblock  %}
{%  block footer  %}

   {% include "foot.md" %}
{%  endblock  %}
