const BaseTheme = `
.tooltip {
  display: none !important;
}`;

const LightTheme = `
html,body{font-family:"roboto"}.p-nav a{color:#0c4c6e !important}.p-nav a:hover{color:#a5cae4 !important}.p-body .p-body-inner .p-have--sidebar .block.member-visitor,.p-body .p-body-inner .p-have--sidebar .block .block-container .block-body,.block.block--category,.structItem.structItem--thread,.BRMSContainer{background-color:#fff !important;border-radius:3px;box-shadow:1px 1px 12px rgba(170,170,170,.38)}.BRMSContainer{font-family:"roboto"}.block.block--category,.structItem.structItem--thread{margin-bottom:12px}.block-header,.BRMSContainer.brmsTopTabs .brmsStatisticHeader,.overlay-title{background-color:#fff !important;color:#0c4c6e !important}.BRMSContainer.brmsTopTabs .brmsStatisticHeader{border-bottom:none !important}.block-body{padding:10px !important}.samBannerUnit a{width:100%}.samBannerUnit img{margin:auto;display:block}.nodeContentBefore,.nodeContentAfter,.block-minorHeader,.block-body{background-color:#fff !important;border:1px solid rgba(128,128,128,.22)}.nodeContentBefore:hover,.nodeContentAfter:hover{border:1px solid #a5cae4}.nodeContentAfter .node-extra-row.lastPostTitle{text-align:left !important}.nodeContentAfter .node-extra-row ul li,.nodeContentAfter .node-extra-row ul li .username,.node-description,.structItemContainer .structItem time,.structItem-minor,.structItem-cell--view span,.structItem-cell--reply span{color:#939393 !important}body[data-template=whats_new] .structItemContainer>.structItem,body[data-template=whats_new_posts] .structItemContainer>.structItem,body[data-template=news_feed] .structItemContainer>.structItem,body[data-template=latest_activity] .structItemContainer>.structItem{margin-bottom:5px !important}.structItemContainer .structItemContainer-group--sticky .structItem{background-color:#fff !important;border:1px solid #e87d7d !important}.avatar{border-radius:50% !important}.block-footer{background-color:#fff !important;margin-top:12px;border-top:none !important;box-shadow:1px 1px 12px rgba(170,170,170,.38)}span.username::before{background-color:red;width:20px;height:20px}.p-body-sidebar .block-body{padding:0px !important}.p-body-sidebar .block-body{padding:0px !important}div .samCodeUnit[data-position=container_content_above],.p-body-inner .p-body-header,.p-body-sidebar.p-have--sidebar .samCodeUnit,.samCodeUnit,.samBannerUnit{display:none}.p-breadcrumbs,.p-discovery.searchinline .search-area form .search-input,#footer .p-footer-inner .footer-custom,#footer .footer-bottom .footerBottomContent{background-color:transparent !important}.brv-breadcrumbs-inner,.block-filterBar,.p-body .p-body-inner .p-body-main .p-body-content .block-outer,.title-thread,.structItemContainer>.structItem:first-child{background-color:#fff !important;border:1px solid #d9d9d9 !important;border-radius:3px}.p-breadcrumbs li:first-child a{color:#0c4c6e;background-color:transparent;padding:3px 12px !important;border-radius:6px;margin-top:3px;border:1px solid #939393}.p-breadcrumbs li:first-child a:hover{color:#fff;background-color:#0c4c6e}.block-body.member-content .listInline--comma .username{background-color:#0c4c6e;color:#fff;padding:3px 8px;font-size:10px;border-radius:5px;display:inline-block;margin-bottom:3px}.listInline.listInline--comma>li:after{content:" " !important}.p-body .p-body-inner .p-have--sidebar .block.member-visitor .content-inner .contentRow-main,.p-discovery.searchinline,.menu-header,.fr-box.fr-basic .fr-wrapper,.tooltip--member .tooltip-content,.p-navSticky.is-sticky .p-nav,body[data-template=conversation_view] .brvMessageUser,body[data-template=thread_view] .brvMessageUser,body[data-template=thread_view] .message-content,body[data-template=conversation_view] .message-footer,body[data-template=thread_view] .message-footer{background-color:#fff !important}body[data-template=conversation_view] .message-footer,body[data-template=thread_view] .message-footer{border-top:1px solid #eff4f7}.p-pageWrapper,.p-navSticky .p-nav{background-color:#fafafa !important}.p-navSticky.is-sticky{box-shadow:0 0 8px 1px rgba(0,0,0,.2)}.p-discovery.searchinline input,.filterBar-menuTrigger,.menu-header,.search-input input::placeholder{color:#0c4c6e !important}.p-body .p-body-inner .p-have--sidebar .block.member-visitor .content-inner .contentRow-main .contentRow-minor,.p-body .p-body-inner .p-have--sidebar .block.member-visitor .content-inner .contentRow-main .contentRow-minor dl dt,.title-thread .item-title{color:#0c4c6e !important}.stickLogo,.notStickLogo,.controlSearch img{filter:invert(100%)}.menu-content{border-radius:5px !important}.menu{box-shadow:1px 1px 12px rgba(170,170,170,.38)}.menu-linkRow[data-nav-id]:hover{background-color:#a5cae4 !important;transition:.25s easee-in-out;color:#000 !important}.has-touchevents .avatar-update,.avatar:hover .avatar-update{bottom:18px !important}.avatar-update,[data-template=thread_view] .p-body-content .block-body{background:none !important}.button{background-color:#fff !important;color:#0c4c6e !important;border-radius:6px !important}.button.button--primary{border:1px solid #939393 !important}.fr-box{border:1px solid #939393;border-radius:3px}.block--messages .message{padding-top:0;margin-top:20px !important}body[data-template=thread_view] article.message{border-top:1px solid silver !important;border-bottom:1px solid silver !important;border-radius:25% !important}.p-body .p-body-inner .p-have--sidebar .block .block-container .block-body{padding:10px !important}.menu--structural.menu--account .menu-content .menu-row--highlighted{background-image:url(https://www.jamiiforums.com/styles/brivium/jamii/extra/bg-visitor-avatar.png);background-size:cover}#footer{background-color:#fff;margin-top:30px;box-shadow:0px -1px 5px rgba(219,219,219,.58)}.footer-column{min-height:220px}#footer .p-footer-inner .footer-custom .row .footer-column .footer-title{border-bottom:none}#footer .footer-bottom{background-color:#f7f7f7}#footer .p-footer-inner .footer-custom .row .footer-column .content-inner{padding:7px 10px 30px}/*# sourceMappingURL=inject.css.map */
` + BaseTheme;

const defaultTheme = `

` + BaseTheme;

const DarkTheme = `
.p-pageWrapper,
.p-navSticky .p-nav {
  background-color: red !important;
}
` + BaseTheme;




function ChangeTheme(){
  chrome.storage.sync.get({ThemeChoiceName: 'default'}, function(data) {
      chrome.storage.sync.set({ThemeChoiceName: data.ThemeChoiceName}, function() {
        
      });
      switch_the_theme_based_on_storage_index(data.ThemeChoiceName);
  });
}

ChangeTheme();

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.ChangeThemeLive == "Now"){
      ChangeTheme();
      sendResponse({message: "the theme has been updated live"});
    }
});

function switch_the_theme_based_on_storage_index(theName){

  try{
    document.getElementById("jfe-themeCss").remove();
  }catch{
    console.log('custom jfe-theme css is not loaded yet')
  }
  var customStyles = document.createElement('style');

  customStyles.id = "jfe-themeCss";

  switch(theName){
    case 'default':
        customStyles.appendChild(document.createTextNode(defaultTheme));
        break;

    case 'light':
        customStyles.appendChild(document.createTextNode(LightTheme));
        break;

    case 'dark':
        customStyles.appendChild(document.createTextNode(DarkTheme));
        break;

      
  }

  document.documentElement.insertBefore(customStyles, document.firstChild.firstChild);

}


