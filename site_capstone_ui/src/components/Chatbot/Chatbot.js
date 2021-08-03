

export default function Chatbot() {
// initialize the bot
/*<script src="/lib/jquery.min.js"></script>
        $('#chatbtn').off("click").on("click", function (e) {
            e.preventDefault();
            var chatmsg = $('input[name=chatmsg]').val();
            
            //Function to post search query, asynchronously get response back and prepend it to a html div.
            $.post('/chatbot', {chatmsg},
                function (returnedData) {

                    console.log(returnedData.media);
                    returnedData.media.forEach(function(obj) {
                        //console.log(obj.title);

                        $('#foodBotHist').prepend(""+
                            "<div class='col-md-3'>"+
                            "<div class='card'>"+
                            "<img src='"+obj.image+"' alt='Recipe Image' style='width:100%'>"+
                            "<div class='rcontainer text-center'>"+
                            "<p><b>"+obj.title+"</b></p>"+
                        "</div> </div> </div>");

                    });
                    var time = new Date($.now()).toUTCString();
                    $('#foodBotHist').prepend("<div  style='margin-bottom:10px; background: #ddffff ; border-left:6px solid; border-color:#2196F3; min-height:30px' class='col-md-12'><h4><b> Foodbot: </b>"+ returnedData.answerText+" </h4>"+time+"</div> ");
                    $('#foodBotHist').prepend("<div  style='margin-bottom:10px; background: #ddffff ; border-right:6px solid; border-color:#2196F3; min-height:30px' class='col-md-12 text-right'> <h4><b> {{ username|default('You') }}: </b>"+ chatmsg +"</h4>"+time+"</div>");
                    //console.log(returnedData.answerText);

                });

        });
    
    */

    return (
        <div className='panel' >
        <h3 class="panel-title">Chat with our Foodbot on foodie topics</h3>
        <p class="panel-subtitle"> What can I say to see Foodbot capabilities</p>
        <div id="chatBotCommandDescription"></div>
        <input id="humanInput" type="text" />
        <div class="btn-group">
            <button id="chatbtn" type="submit"  >Send Chat</button> 
            <button type="button"   onclick="$('#description').slideToggle();">What can I say?</button>
              </div>
       
              <div id="description" >
                <ul>
                    <li>Ask for recipes like <k>'chicken recipes'</k> or <k>'spaghetti with shrimp'</k> </li>
                    <li>Ask for nutrient contents like <k>'vitamin a in 2 carrots'</k> or <k>'calories is 1 cup of butter'</k></li>
                    <li>Convert something with <k>'2 cups of butter in grams'</k></li>
                    <li>Check out foodie gifts by saying <k>'show me some foodie gifts'</k></li>
                    <li>Find food substitutes by saying <k>'what is a substitute for flour'</k></li>
                    <li>Thirsty? Ask for wine pairings like <k>'which wine goes well with spaghetti carbonara'</k></li>
                    <li>If you want more results, just say <k>'more'</k></li>
                    <li>For more similar results say <k>'more like the first/second/third...'</k></li>
                    <li>Let spoonacular tell you a joke, just say <k>'tell me a joke'.</k></li>
                    <li>Want to learn some food trivia, just say <k>'food trivia'.</k></li>
                </ul>
            </div>

            <div id="foodBotHist" class="col-md-12" ></div>
            <h3 class="text-center">Type in your search Query</h3>       

        </div>
    )
}

/*<div id="chatBot">
        <div id="chatBotThinkingIndicator"></div>
        <div id="chatBotHistory"></div>
        </div>*/
        