fetchData = async () => {
    try {
      let res = await fetch(
        "https://masai-mock-api.herokuapp.com/news/top-headlines?country=in"
      );
      let data = await res.json();
      let data2 = data.articles;
      console.log(data2);
      append(data2)
    } catch (err) {
      console.log(err);
    }
  };
  let append = (data) => {
    data.forEach(
      (
        { author, title, publishedAt, content, description, urlToImage },
        index
      ) => {
        if (index % 2 == 1) {
          let bag = document.createElement("div");
          bag.style.borderBottom = "1px solid grey";
          
          bag.style.padding = "2px 0px"
          bag.style.display = "flex"
          bag.style.justifyContent = "space-around"
          let bagleft = document.createElement("div");
          bagleft.style.width = "70%";
          bagleft.style.lineHeight = "15px";
          bagleft.style.display = "flex";
          bagleft.style.padding = "0px 10px";
          bagleft.style.flexDirection = "column";
          bagleft.style.justifyContent = "space-around";
          let bagleftcontainer = document.createElement("div");
          bagleftcontainer.style.display = "flex";
          bagleftcontainer.style.justifyContent = "space-between";
          let bagleftleft = document.createElement("div");
          let bagleftright = document.createElement("div");
          let heading = document.createElement("p");
          heading.innerHTML = `<b>${title}</b>`;
          heading.style.marginTop = "0px"
          let para = document.createElement("p");
          para.innerText = `2 min read . ${publishedAt}`;
          para.style.margin = "0";
          let shareoption = document.createElement("div");
          shareoption.style.display = "flex";
          shareoption.style.alignContent = "center";
          let bookmark = document.createElement("i");
          bookmark.setAttribute("class", "fa-regular fa-bookmark");
          bookmark.style.fontSize = "20px";
          let share = document.createElement("i");
          share.setAttribute("class", "fa fa-share-alt");
          share.style.fontSize = "20px";
          share.style.paddingLeft = "10px";
          shareoption.append(bookmark, share);
          bagleftcontainer.append(para, shareoption);
          bagleft.append(heading, bagleftcontainer);
          let bagright = document.createElement("div");
          bagright.style.display = "flex";
          bagright.style.justifyContent = "center";
          bagright.style.padding = "10px 0px";
          bagright.style.width = "25%";
          bagright.style.height = "80%"
          let img = document.createElement("img");
          img.src = urlToImage;
          img.style.borderRadius = "10px";
          img.style.width = "100%";
          img.style.height="100px"
          bagright.append(img);
          bag.append(bagleft, bagright);
          document.getElementById("right_sidebar_container").append(bag);
          heading.addEventListener("click",function(){
            myFn({author,title,publishedAt,content,description,urlToImage})
          })
          heading.style.cursor = "pointer"
        }
      }
    );
  };
  fetchData();
  function myFn({author,title,publishedAt,content,description,urlToImage}){
    let data = {author:author,title:title,publishedAt:publishedAt,content:content,description:description,urlToImage:urlToImage}
    localStorage.setItem("newsData",JSON.stringify(data))
    window.location.href = "news.html"
  }