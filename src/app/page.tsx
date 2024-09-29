import Image from "next/image";
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
export default function Home() {
  return (
    <div>
      <Header/>
     
      <h1><b><center>Welcome to Homepage</center></b></h1>
      <div className="img">
        <div className="image-frame">
        <Image
          className="mt-0"
          src="/ana.jpg" 
          alt="logo image"
          width={250}
          height={10} 
          
         >
         </Image>
         </div>
         </div>
    <div>
      <p>A website is a place on the internet where you can easily post information about yourself, your business or topics you're passionate about. It's like having your own corner of the web to showcase your ideas and connect with others. Whether you're looking to share knowledge, sell online, communicate with others, learn something new or simply have fun—websites serve a variety of purposes. To access a website, users simply need a device with a web browser—like laptops, smartphones or tablets—along with an Internet connection.

</p>
<h2><b>What are websites used for?</b></h2>

<p>From personal blogs to e-commerce stores, websites have become a crucial part of our routines, offering convenience and accessibility. Whether it's for entertainment, education, or business, websites are digital platforms that enable communication, information sharing, and online transactions. 

</p>
<p>Websites can be used for personal purposes, such as blogging or sharing information about hobbies and interests. For businesses, a website serves as an online storefront where customers can view products or services, make purchases and reach out for customer support.


They are also commonly used for education purposes, with many schools and universities having their own websites to share information and resources with students. Additionally, organizations and nonprofits use websites to raise awareness about their causes and connect with potential donors.

</p>
<h2><b>How does a website work?
</b></h2>
<p>The first thing to understand is the internet and the web that provide a ground for websites.</p>
<p> The internet is the technology or infrastructure connecting computers and facilitating information sharing. The web is the system that enables information sharing using the internet. It encompasses digital documents, websites, webpages, media and more. To view web content, we use web browsers like Google Chrome, Internet Explorer, Microsoft Edge, Mozilla Firefox or Safari.


When you enter a web address or domain name into your browser, your computer sends a request to the hosting server. This request passes through the Domain Name System (DNS) to look up the server's internet protocol (IP) address. The web service uses protocols like Hypertext Transfer Protocol (HTTP), Hypertext Transfer Protocol Secure (HTTPS) and File Transfer Protocol (FTP) to transmit information and files over the web.


Once the server receives the request, it sends back the requested webpage, along with images and other files, to your computer. The browser then displays the webpage using technologies like HyperText Markup Language (HTML) and Cascading Style Sheets (CSS). These technologies structure and present the information on the screen. Website loading time depends on a range of factors like server speed, internet connection quality and website size and complexity.

</p>


      </div>
    <Footer/>
      
    </div>
  
  );
}
