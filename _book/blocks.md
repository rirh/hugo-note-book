{%  block header  %}
  <div id="header">
  <script>
    (function(){
        const style = `
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transition: all .3ms;
        height:${document.documentElement.clientHeight}px;
        `
        var dom = document.getElementById('header');
        dom.setAttribute('style',style)
        // var tit=document.title.split('·')[0];
        // if(tit){
        //   var tdom = document.getElementById('blocks-title');
        //   var len = tit.lenght;
        //   tdom.setAttribute('style',`font-size:${len}em`)
        // } 
        var pub_img_current_image;
        function backgroundImage(){
        var pub_img_path='https://6372-crypto2server-576164-1302901174.tcb.qcloud.la/pub/';
        var pub_img_num = 711;
        var pub_img_current_no=function(){return Math.floor(Math.random()*pub_img_num+1);};
        var pub_img_url=function(){return pub_img_path+'pub_'+pub_img_current_no()+'.jpg';};
        if (pub_img_current_image === undefined ) pub_img_current_image = pub_img_url();
        var body = dom.style;
        body.backgroundSize = 'cover';
        body.backgroundRepeat = 'no-repeat';
        body.backgroundImage = 'url('+ pub_img_current_image +')';
        body.borderRadius="0px";
        const url = 'https://42541d62-1eb3-4f4a-b656-cc98d4542086.bspapp.com/http/epic'
        fetch(url)
        .then(async e => {
            const s = await e.json()
            const [epic] = s.data
            document.querySelector('.verse').innerHTML = epic.contant||'';
        })
        // // var span = document.getElementById('img_placer');
        // span.innerHTML = '<span style="background-image: url('+(pub_img_current_image=pub_img_url())+');width: 0px;height: 0px;display: inline;"></span>';
        }
        backgroundImage();
    }())
  </script>
  <div class="card" >
    <p class="blocks-title" id="blocks-title">{{page.title}}</p>
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
