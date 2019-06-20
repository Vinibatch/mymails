
                          document.getElementById("count").textContent = document.getElementsByTagName("p").length;

                          for(var i=0; i<document.getElementsByClassName("trash").length; i++){
                              document.getElementsByClassName("trash")[i].addEventListener("click",
                                function(){
                                  this.parentNode.remove();
                                  document.getElementById("count").textContent = document.getElementsByTagName("p").length;
                                }
                              )
                            };

                            document.getElementById('btn-add').addEventListener( "click",
                            function(){ 
                              console.log("click détécté !");
                         
                          var divRaw = document.createElement("div");
                          divRaw.className="row new-last-row";
                          document.body.appendChild(divRaw);

                          var img1  = document.createElement("img");
                          img1.className= 'avatar';
                          img1.src = "avatar-1.jpg";
                          divRaw.appendChild(img1);

                          var divText = document.createElement("div");
                          divText.className="content";
                          divRaw.appendChild(divText);

                          var  h6 = document.createElement("div");
                          h6.textContent="Noel Paganelli";
                          divText.appendChild(h6);

                          var p = document.createElement("p")
                              p.textContent = document.getElementById("add-message").value;
                          divText.appendChild(p);

                          var img2 = document.createElement("img");
                          img2.className='trash';
                          img2.src="trash.png";
                          divRaw.appendChild(img2);

                          document.getElementById("add-message").value = "";
                          document.getElementById("count").textContent = document.getElementsByTagName("p").length;
                          img2.addEventListener("click",
                          function() {
                            this.parentNode.remove();
                            document.getElementById("count").textContent = document.getElementsByTagName("p").length;
                          }
                          )
                      
                        })
                      
                        