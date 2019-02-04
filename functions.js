        function removeSubdirectoryFromUrlString(url){
          
          var ssl = false;
          if(url.indexOf("https://")){
            ssl = true;
          }

          url = url.replace("http://", "");
          url = url.replace("https://", "");
          var pathArray = url.split("/")
          url = pathArray[0];
          if(ssl){
            url = "https://" + url;
          }else{
            url = "http://" + url;
          }

          return url;
        }
