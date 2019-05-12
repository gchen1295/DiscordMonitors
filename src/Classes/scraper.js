const request = require("request-promise");
const xml2js = require("xml2js");



var parseXML = (url) =>{
    //Create our sitemap link
    let sitemap = url;
    if(sitemap.endsWith('/')){
        sitemap = sitemap + "sitemap.xml";
    }
    else{
        sitemap = sitemap + "/sitemap.xml";
    }
    
    let options = {
        method : 'GET',
        uri: sitemap,
        headers : {
            'User-Agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
            'Accept-Encoding' : 'gzip, deflate, br',
            'Content-Type' : 'text/xml'
            //'Cookie' : '_shopify_y=5ab88541-8da0-4e75-b15e-70c41f411617; secure_customer_sig=; _shopify_country=United+States; cart_currency=USD; _orig_referrer=; _landing_page=%2F; cart_sig=; _y=5ab88541-8da0-4e75-b15e-70c41f411617; _shopify_fs=2019-05-08T18%3A43%3A20.977Z; _ga=GA1.2.1886634215.1557341005; _gid=GA1.2.348890571.1557341005; _fbp=fb.1.1557341007719.650129358; rskxRunCookie=0; rCookie=0odqa7e41d3cjulubmo0pu; sig-shopify=true; shopify_pay_redirect=pending; _s=990d26f1-1AC9-4780-FDB8-862D7F08B96C; _shopify_s=990d26f1-1AC9-4780-FDB8-862D7F08B96C; _shopify_sa_t=2019-05-08T20%3A05%3A33.722Z; _shopify_sa_p=; lastRskxRun=1557345933804',
            },
        //gzip : true,
        json : false
        }
        
    request(url).then((response)=>{
        xml2js.parseString(response,(err,result)=>{
            console.dir(JSON.stringify(result));
        })
    })
    .catch((err)=>{
        console.log(err.message);
    })

}

module.exports.ParseXML = parseXML;