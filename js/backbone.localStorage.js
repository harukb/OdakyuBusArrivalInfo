  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Backbone.localStorage/backbone.localStorage.js at master · jeromegn/Backbone.localStorage · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="Bx+m/HGk4HHNN4hNjlcIeDxEqqAU1L8qZqBK3ZtStMY=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-ccf67b34fca68b88232e689477d55aea64a3928a.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-fe80748c5b7e485f7d0e47c94badb1dfb2f3257a.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-ec9348b8374c693b0749d0b95b215fe3f5414fd0.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-ec0196a56b4be9535797662ec506168efa147608.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="00c8b815fdc4c2a1021acacad4908ee5">

        <link data-pjax-transient rel='permalink' href='/jeromegn/Backbone.localStorage/blob/955425b7f253eaca09f9a58f5a03e22d44288924/backbone.localStorage.js'>
    <meta property="og:title" content="Backbone.localStorage"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/jeromegn/Backbone.localStorage"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/c96dbcc746d551ea0665da4a23536280?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="Backbone.localStorage - A localStorage adapter for Backbone.js"/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="jeromegn/Backbone.localStorage"/>

    <meta name="description" content="Backbone.localStorage - A localStorage adapter for Backbone.js" />


    <meta content="43325" name="octolytics-dimension-user_id" /><meta content="1022555" name="octolytics-dimension-repository_id" />
  <link href="https://github.com/jeromegn/Backbone.localStorage/commits/master.atom" rel="alternate" title="Recent Commits to Backbone.localStorage:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob macintosh vis-public env-production  ">
    <div id="wrapper">

      
      
      

      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">Github</a>

    <div class="header-actions">
      <a class="button primary" href="/signup">Sign up</a>
      <a class="button" href="/login?return_to=%2Fjeromegn%2FBackbone.localStorage%2Fblob%2Fmaster%2Fbackbone.localStorage.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">


      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="http://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="octicon octicon-gear "></span></a>

  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
      data-repo="jeromegn/Backbone.localStorage"
      data-branch="master"
      data-sha="a1673db5ae274b52bd8588968c56fbbc2cc08569"
  >

    <input type="hidden" name="nwo" value="jeromegn/Backbone.localStorage" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

  <div class="divider-vertical"></div>

</form>
    </div>

  </div>
</div>


      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              

<ul class="pagehead-actions">



    <li>
      <a href="/login?return_to=%2Fjeromegn%2FBackbone.localStorage"
        class="minibutton js-toggler-target star-button entice tooltipped upwards"
        title="You must be signed in to use this feature" rel="nofollow">
        <span class="octicon octicon-star"></span>Star
      </a>
      <a class="social-count js-social-count" href="/jeromegn/Backbone.localStorage/stargazers">
        944
      </a>
    </li>
    <li>
      <a href="/login?return_to=%2Fjeromegn%2FBackbone.localStorage"
        class="minibutton js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/jeromegn/Backbone.localStorage/network" class="social-count">
        354
      </a>
    </li>
</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-octicon octicon-repo"></span>
                <span class="author vcard">
                  <a href="/jeromegn" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">jeromegn</span>
                  </a></span> /
                <strong><a href="/jeromegn/Backbone.localStorage" class="js-current-repository">Backbone.localStorage</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li class="pulse-nav"><a href="/jeromegn/Backbone.localStorage/pulse" class="js-selected-navigation-item " data-selected-links="pulse /jeromegn/Backbone.localStorage/pulse" rel="nofollow"><span class="octicon octicon-pulse"></span></a></li>
    <li><a href="/jeromegn/Backbone.localStorage" class="js-selected-navigation-item selected" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /jeromegn/Backbone.localStorage">Code</a></li>
    <li><a href="/jeromegn/Backbone.localStorage/network" class="js-selected-navigation-item " data-selected-links="repo_network /jeromegn/Backbone.localStorage/network">Network</a></li>
    <li><a href="/jeromegn/Backbone.localStorage/pulls" class="js-selected-navigation-item " data-selected-links="repo_pulls /jeromegn/Backbone.localStorage/pulls">Pull Requests <span class='counter'>1</span></a></li>

      <li><a href="/jeromegn/Backbone.localStorage/issues" class="js-selected-navigation-item " data-selected-links="repo_issues /jeromegn/Backbone.localStorage/issues">Issues <span class='counter'>4</span></a></li>



    <li><a href="/jeromegn/Backbone.localStorage/graphs" class="js-selected-navigation-item " data-selected-links="repo_graphs repo_contributors /jeromegn/Backbone.localStorage/graphs">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/jeromegn/Backbone.localStorage/tags" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_tags /jeromegn/Backbone.localStorage/tags">Tags <span class="counter ">5</span></a></li>
    </ul>
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="octicon octicon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jeromegn/Backbone.localStorage/blob/gh-pages/backbone.localStorage.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="gh-pages" rel="nofollow" title="gh-pages">gh-pages</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item selected">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jeromegn/Backbone.localStorage/blob/master/backbone.localStorage.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jeromegn/Backbone.localStorage/blob/v1.1.4/backbone.localStorage.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.1.4" rel="nofollow" title="v1.1.4">v1.1.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jeromegn/Backbone.localStorage/blob/v1.1.3/backbone.localStorage.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.1.3" rel="nofollow" title="v1.1.3">v1.1.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jeromegn/Backbone.localStorage/blob/v1.1.2/backbone.localStorage.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.1.2" rel="nofollow" title="v1.1.2">v1.1.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jeromegn/Backbone.localStorage/blob/v1.1.1/backbone.localStorage.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.1.1" rel="nofollow" title="v1.1.1">v1.1.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jeromegn/Backbone.localStorage/blob/v1.1.0/backbone.localStorage.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.1.0" rel="nofollow" title="v1.1.0">v1.1.0</a>
                </div> <!-- /.select-menu-item -->
            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/jeromegn/Backbone.localStorage" class="selected js-selected-navigation-item tabnav-tab" data-selected-links="repo_source /jeromegn/Backbone.localStorage">Files</a></li>
    <li><a href="/jeromegn/Backbone.localStorage/commits/master" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_commits /jeromegn/Backbone.localStorage/commits/master">Commits</a></li>
    <li><a href="/jeromegn/Backbone.localStorage/branches" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_branches /jeromegn/Backbone.localStorage/branches" rel="nofollow">Branches <span class="counter ">2</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:ff32156bf79c9e5fdcb652077418dfa9 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:ff32156bf79c9e5fdcb652077418dfa9 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jeromegn/Backbone.localStorage" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">Backbone.localStorage</span></a></span></span><span class="separator"> / </span><strong class="final-path">backbone.localStorage.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="backbone.localStorage.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
        </div>

      <a href="/jeromegn/Backbone.localStorage/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/c96dbcc746d551ea0665da4a23536280?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/jeromegn" rel="author">jeromegn</a></span>
    <time class="js-relative-date" datetime="2013-05-19T07:10:49-07:00" title="2013-05-19 07:10:49">May 19, 2013</time>
    <div class="commit-title">
        <a href="/jeromegn/Backbone.localStorage/commit/17839c0d95fb0d56f6d38ac9df15f386fa1a8e47" class="message">Bumped to version 1.1.4 after pull</a> <a href="https://github.com/jeromegn/Backbone.localStorage/issues/90" class="issue-link" title="Check for localStorage support">#90</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>24</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="jeromegn" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=jeromegn"><img height="20" src="https://secure.gravatar.com/avatar/c96dbcc746d551ea0665da4a23536280?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="dwt" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=dwt"><img height="20" src="https://secure.gravatar.com/avatar/1beb42701eb7745571828423d564eb37?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="nekman" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=nekman"><img height="20" src="https://secure.gravatar.com/avatar/456cb814a8326c1b223810d62535ca7a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="phoey" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=phoey"><img height="20" src="https://secure.gravatar.com/avatar/bf06c8e7ae32d802d2b77915c560668a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="ryan-roemer" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=ryan-roemer"><img height="20" src="https://secure.gravatar.com/avatar/bac1934aec2a98a77832526a14eefbfc?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="pollensoft" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=pollensoft"><img height="20" src="https://secure.gravatar.com/avatar/9f8efb80634f1b63492a5774c75e2b3e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="uzikilon" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=uzikilon"><img height="20" src="https://secure.gravatar.com/avatar/70a60deafec13f40b220ce16a07a7896?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="dfcreative" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=dfcreative"><img height="20" src="https://secure.gravatar.com/avatar/a24f38a77a618758afe7656dc4c667d9?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="marlun78" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=marlun78"><img height="20" src="https://secure.gravatar.com/avatar/5acaf3f27f11c915f581de83f2888cdf?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="rbu" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=rbu"><img height="20" src="https://secure.gravatar.com/avatar/ea01582c321a11551a7de9e0e115790a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="yakubori" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=yakubori"><img height="20" src="https://secure.gravatar.com/avatar/b335798ea8ce5d6c1e5941c3a530d826?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="tlray" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=tlray"><img height="20" src="https://secure.gravatar.com/avatar/33644f524058037739fb1d349dd61211?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="igoralekseev" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=igoralekseev"><img height="20" src="https://secure.gravatar.com/avatar/5759b6735ee2cd8f7fb2697ec59ace1d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="4vanger" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=4vanger"><img height="20" src="https://secure.gravatar.com/avatar/bff933bdab4098061ca237d0926feb69?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="juhovh" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=juhovh"><img height="20" src="https://secure.gravatar.com/avatar/c6b34122cd28545bf6798dbf8a17d671?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="ryangreenberg" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=ryangreenberg"><img height="20" src="https://secure.gravatar.com/avatar/b0a03ac75fb7eb56bf0e231b42039415?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="andreypopp" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=andreypopp"><img height="20" src="https://secure.gravatar.com/avatar/b81f3c915bb1782e6ebe5a542e57ef9b?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="erichmenge" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=erichmenge"><img height="20" src="https://secure.gravatar.com/avatar/d309ddb80e1e28e6f8e3a9685d1f8b29?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="zertosh" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=zertosh"><img height="20" src="https://secure.gravatar.com/avatar/a533b2e0c40619f551bf54506e53ca2c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="dmix" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=dmix"><img height="20" src="https://secure.gravatar.com/avatar/de100937ded71df1569b327724da59f7?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="Dremora" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=Dremora"><img height="20" src="https://secure.gravatar.com/avatar/22113c3309f52145f02a7ff5c2736b1a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="andriijas" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=andriijas"><img height="20" src="https://secure.gravatar.com/avatar/d132cd1b472750c37ffa4ba5b6bd462a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="spiralman" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=spiralman"><img height="20" src="https://secure.gravatar.com/avatar/40024617164314f70f7584ac09b96c1d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="kmchugh" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=kmchugh"><img height="20" src="https://secure.gravatar.com/avatar/b7e68730b55f5ba3919b6dc49e52289c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/c96dbcc746d551ea0665da4a23536280?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/jeromegn">jeromegn</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/1beb42701eb7745571828423d564eb37?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/dwt">dwt</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/456cb814a8326c1b223810d62535ca7a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/nekman">nekman</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/bf06c8e7ae32d802d2b77915c560668a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/phoey">phoey</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/bac1934aec2a98a77832526a14eefbfc?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/ryan-roemer">ryan-roemer</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/9f8efb80634f1b63492a5774c75e2b3e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/pollensoft">pollensoft</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/70a60deafec13f40b220ce16a07a7896?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/uzikilon">uzikilon</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/a24f38a77a618758afe7656dc4c667d9?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/dfcreative">dfcreative</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/5acaf3f27f11c915f581de83f2888cdf?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/marlun78">marlun78</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/ea01582c321a11551a7de9e0e115790a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/rbu">rbu</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/b335798ea8ce5d6c1e5941c3a530d826?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/yakubori">yakubori</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/33644f524058037739fb1d349dd61211?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/tlray">tlray</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/5759b6735ee2cd8f7fb2697ec59ace1d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/igoralekseev">igoralekseev</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/bff933bdab4098061ca237d0926feb69?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/4vanger">4vanger</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/c6b34122cd28545bf6798dbf8a17d671?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/juhovh">juhovh</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/b0a03ac75fb7eb56bf0e231b42039415?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/ryangreenberg">ryangreenberg</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/b81f3c915bb1782e6ebe5a542e57ef9b?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/andreypopp">andreypopp</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/d309ddb80e1e28e6f8e3a9685d1f8b29?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/erichmenge">erichmenge</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/a533b2e0c40619f551bf54506e53ca2c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/zertosh">zertosh</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/de100937ded71df1569b327724da59f7?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/dmix">dmix</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/22113c3309f52145f02a7ff5c2736b1a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/Dremora">Dremora</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/d132cd1b472750c37ffa4ba5b6bd462a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/andriijas">andriijas</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/40024617164314f70f7584ac09b96c1d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/spiralman">spiralman</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/b7e68730b55f5ba3919b6dc49e52289c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/kmchugh">kmchugh</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/jeromegn/Backbone.localStorage/blob/955425b7f253eaca09f9a58f5a03e22d44288924/backbone.localStorage.js" data-title="Backbone.localStorage/backbone.localStorage.js at master · jeromegn/Backbone.localStorage · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="octicon octicon-file-text"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>221 lines (186 sloc)</span>
                <span>6.789 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                      <a class="minibutton js-entice" href=""
                         data-entice="You must be signed in and on a branch to make or propose changes">Edit</a>
                  <a href="/jeromegn/Backbone.localStorage/raw/master/backbone.localStorage.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/jeromegn/Backbone.localStorage/blame/master/backbone.localStorage.js" class="button minibutton ">Blame</a>
                  <a href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * Backbone localStorage Adapter</span></div><div class='line' id='LC3'><span class="cm"> * Version 1.1.4</span></div><div class='line' id='LC4'><span class="cm"> *</span></div><div class='line' id='LC5'><span class="cm"> * https://github.com/jeromegn/Backbone.localStorage</span></div><div class='line' id='LC6'><span class="cm"> */</span></div><div class='line' id='LC7'><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">root</span><span class="p">,</span> <span class="nx">factory</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC8'>&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">exports</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC9'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">factory</span><span class="p">(</span><span class="nx">require</span><span class="p">(</span><span class="s2">&quot;underscore&quot;</span><span class="p">),</span> <span class="nx">require</span><span class="p">(</span><span class="s2">&quot;backbone&quot;</span><span class="p">));</span></div><div class='line' id='LC10'>&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s2">&quot;function&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC11'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// AMD. Register as an anonymous module.</span></div><div class='line' id='LC12'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">define</span><span class="p">([</span><span class="s2">&quot;underscore&quot;</span><span class="p">,</span><span class="s2">&quot;backbone&quot;</span><span class="p">],</span> <span class="kd">function</span><span class="p">(</span><span class="nx">_</span><span class="p">,</span> <span class="nx">Backbone</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC13'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Use global variables if the locals are undefined.</span></div><div class='line' id='LC14'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">factory</span><span class="p">(</span><span class="nx">_</span> <span class="o">||</span> <span class="nx">root</span><span class="p">.</span><span class="nx">_</span><span class="p">,</span> <span class="nx">Backbone</span> <span class="o">||</span> <span class="nx">root</span><span class="p">.</span><span class="nx">Backbone</span><span class="p">);</span></div><div class='line' id='LC15'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC16'>&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC17'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// RequireJS isn&#39;t being used. Assume underscore and backbone are loaded in &lt;script&gt; tags</span></div><div class='line' id='LC18'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">factory</span><span class="p">(</span><span class="nx">_</span><span class="p">,</span> <span class="nx">Backbone</span><span class="p">);</span></div><div class='line' id='LC19'>&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC20'><span class="p">}(</span><span class="k">this</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">_</span><span class="p">,</span> <span class="nx">Backbone</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC21'><span class="c1">// A simple module to replace `Backbone.sync` with *localStorage*-based</span></div><div class='line' id='LC22'><span class="c1">// persistence. Models are given GUIDS, and saved into a JSON object. Simple</span></div><div class='line' id='LC23'><span class="c1">// as that.</span></div><div class='line' id='LC24'><br/></div><div class='line' id='LC25'><span class="c1">// Hold reference to Underscore.js and Backbone.js in the closure in order</span></div><div class='line' id='LC26'><span class="c1">// to make things work even if they are removed from the global namespace</span></div><div class='line' id='LC27'><br/></div><div class='line' id='LC28'><span class="c1">// Generate four random hex digits.</span></div><div class='line' id='LC29'><span class="kd">function</span> <span class="nx">S4</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC30'>&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(((</span><span class="mi">1</span><span class="o">+</span><span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">())</span><span class="o">*</span><span class="mh">0x10000</span><span class="p">)</span><span class="o">|</span><span class="mi">0</span><span class="p">).</span><span class="nx">toString</span><span class="p">(</span><span class="mi">16</span><span class="p">).</span><span class="nx">substring</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC31'><span class="p">};</span></div><div class='line' id='LC32'><br/></div><div class='line' id='LC33'><span class="c1">// Generate a pseudo-GUID by concatenating random hexadecimal.</span></div><div class='line' id='LC34'><span class="kd">function</span> <span class="nx">guid</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="nx">S4</span><span class="p">()</span><span class="o">+</span><span class="nx">S4</span><span class="p">()</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">S4</span><span class="p">()</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">S4</span><span class="p">()</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">S4</span><span class="p">()</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">S4</span><span class="p">()</span><span class="o">+</span><span class="nx">S4</span><span class="p">()</span><span class="o">+</span><span class="nx">S4</span><span class="p">());</span></div><div class='line' id='LC36'><span class="p">};</span></div><div class='line' id='LC37'><br/></div><div class='line' id='LC38'><span class="c1">// Our Store is represented by a single JS object in *localStorage*. Create it</span></div><div class='line' id='LC39'><span class="c1">// with a meaningful name, like the name you&#39;d give a table.</span></div><div class='line' id='LC40'><span class="c1">// window.Store is deprectated, use Backbone.LocalStorage instead</span></div><div class='line' id='LC41'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">LocalStorage</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">Store</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC42'>&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="s2">&quot;Backbone.localStorage: Environment does not support localStorage.&quot;</span></div><div class='line' id='LC44'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC45'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">name</span> <span class="o">=</span> <span class="nx">name</span><span class="p">;</span></div><div class='line' id='LC46'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">store</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">getItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="p">);</span></div><div class='line' id='LC47'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">records</span> <span class="o">=</span> <span class="p">(</span><span class="nx">store</span> <span class="o">&amp;&amp;</span> <span class="nx">store</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;,&quot;</span><span class="p">))</span> <span class="o">||</span> <span class="p">[];</span></div><div class='line' id='LC48'><span class="p">};</span></div><div class='line' id='LC49'><br/></div><div class='line' id='LC50'><span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">LocalStorage</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC51'><br/></div><div class='line' id='LC52'>&nbsp;&nbsp;<span class="c1">// Save the current state of the **Store** to *localStorage*.</span></div><div class='line' id='LC53'>&nbsp;&nbsp;<span class="nx">save</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">setItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;,&quot;</span><span class="p">));</span></div><div class='line' id='LC55'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC56'><br/></div><div class='line' id='LC57'>&nbsp;&nbsp;<span class="c1">// Add a model, giving it a (hopefully)-unique GUID, if it doesn&#39;t already</span></div><div class='line' id='LC58'>&nbsp;&nbsp;<span class="c1">// have an id of it&#39;s own.</span></div><div class='line' id='LC59'>&nbsp;&nbsp;<span class="nx">create</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">model</span><span class="p">.</span><span class="nx">id</span> <span class="o">=</span> <span class="nx">guid</span><span class="p">();</span></div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">model</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="nx">model</span><span class="p">.</span><span class="nx">idAttribute</span><span class="p">,</span> <span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">);</span></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">setItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">,</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">model</span><span class="p">));</span></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">.</span><span class="nx">toString</span><span class="p">());</span></div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">save</span><span class="p">();</span></div><div class='line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">model</span><span class="p">);</span></div><div class='line' id='LC68'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC69'><br/></div><div class='line' id='LC70'>&nbsp;&nbsp;<span class="c1">// Update a model by replacing its copy in `this.data`.</span></div><div class='line' id='LC71'>&nbsp;&nbsp;<span class="nx">update</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">setItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">,</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">model</span><span class="p">));</span></div><div class='line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">include</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">,</span> <span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">.</span><span class="nx">toString</span><span class="p">()))</span></div><div class='line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">.</span><span class="nx">toString</span><span class="p">());</span> <span class="k">this</span><span class="p">.</span><span class="nx">save</span><span class="p">();</span></div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">model</span><span class="p">);</span></div><div class='line' id='LC76'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC77'><br/></div><div class='line' id='LC78'>&nbsp;&nbsp;<span class="c1">// Retrieve a model from `this.data` by id.</span></div><div class='line' id='LC79'>&nbsp;&nbsp;<span class="nx">find</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">jsonData</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">getItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">));</span></div><div class='line' id='LC81'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC82'><br/></div><div class='line' id='LC83'>&nbsp;&nbsp;<span class="c1">// Return the array of all models currently in storage.</span></div><div class='line' id='LC84'>&nbsp;&nbsp;<span class="nx">findAll</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Lodash removed _#chain in v1.0.0-rc.1</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">chain</span> <span class="o">||</span> <span class="nx">_</span><span class="p">)(</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">)</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">id</span><span class="p">){</span></div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">jsonData</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">getItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">id</span><span class="p">));</span></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="k">this</span><span class="p">)</span></div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">compact</span><span class="p">()</span></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">value</span><span class="p">();</span></div><div class='line' id='LC92'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC93'><br/></div><div class='line' id='LC94'>&nbsp;&nbsp;<span class="c1">// Delete a model from `this.data`, returning it.</span></div><div class='line' id='LC95'>&nbsp;&nbsp;<span class="nx">destroy</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">model</span><span class="p">.</span><span class="nx">isNew</span><span class="p">())</span></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span></div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">removeItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">);</span></div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">records</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">id</span><span class="p">){</span></div><div class='line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">id</span> <span class="o">===</span> <span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">.</span><span class="nx">toString</span><span class="p">();</span></div><div class='line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">save</span><span class="p">();</span></div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">model</span><span class="p">;</span></div><div class='line' id='LC104'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC105'><br/></div><div class='line' id='LC106'>&nbsp;&nbsp;<span class="nx">localStorage</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC107'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">localStorage</span><span class="p">;</span></div><div class='line' id='LC108'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC109'><br/></div><div class='line' id='LC110'>&nbsp;&nbsp;<span class="c1">// fix for &quot;illegal access&quot; error on Android when JSON.parse is passed null</span></div><div class='line' id='LC111'>&nbsp;&nbsp;<span class="nx">jsonData</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">data</span> <span class="o">&amp;&amp;</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC113'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC114'><br/></div><div class='line' id='LC115'>&nbsp;&nbsp;<span class="c1">// Clear localStorage for specific collection.</span></div><div class='line' id='LC116'>&nbsp;&nbsp;<span class="nx">_clear</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">local</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">(),</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">itemRe</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&quot;^&quot;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">name</span> <span class="o">+</span> <span class="s2">&quot;-&quot;</span><span class="p">);</span></div><div class='line' id='LC119'><br/></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Remove id-tracking item (e.g., &quot;foo&quot;).</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">local</span><span class="p">.</span><span class="nx">removeItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="p">);</span></div><div class='line' id='LC122'><br/></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Lodash removed _#chain in v1.0.0-rc.1</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Match all data items (e.g., &quot;foo-ID&quot;) and remove.</span></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">chain</span> <span class="o">||</span> <span class="nx">_</span><span class="p">)(</span><span class="nx">local</span><span class="p">).</span><span class="nx">keys</span><span class="p">()</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">k</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">itemRe</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">k</span><span class="p">);</span> <span class="p">})</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">k</span><span class="p">)</span> <span class="p">{</span> <span class="nx">local</span><span class="p">.</span><span class="nx">removeItem</span><span class="p">(</span><span class="nx">k</span><span class="p">);</span> <span class="p">});</span></div><div class='line' id='LC128'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC129'><br/></div><div class='line' id='LC130'>&nbsp;&nbsp;<span class="c1">// Size of localStorage.</span></div><div class='line' id='LC131'>&nbsp;&nbsp;<span class="nx">_storageSize</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC132'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC133'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC134'><br/></div><div class='line' id='LC135'><span class="p">});</span></div><div class='line' id='LC136'><br/></div><div class='line' id='LC137'><span class="c1">// localSync delegate to the model or collection&#39;s</span></div><div class='line' id='LC138'><span class="c1">// *localStorage* property, which should be an instance of `Store`.</span></div><div class='line' id='LC139'><span class="c1">// window.Store.sync and Backbone.localSync is deprecated, use Backbone.LocalStorage.sync instead</span></div><div class='line' id='LC140'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">LocalStorage</span><span class="p">.</span><span class="nx">sync</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">Store</span><span class="p">.</span><span class="nx">sync</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">localSync</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC141'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">store</span> <span class="o">=</span> <span class="nx">model</span><span class="p">.</span><span class="nx">localStorage</span> <span class="o">||</span> <span class="nx">model</span><span class="p">.</span><span class="nx">collection</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">;</span></div><div class='line' id='LC142'><br/></div><div class='line' id='LC143'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">errorMessage</span><span class="p">,</span> <span class="nx">syncDfd</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">$</span><span class="p">.</span><span class="nx">Deferred</span> <span class="o">&amp;&amp;</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">$</span><span class="p">.</span><span class="nx">Deferred</span><span class="p">();</span> <span class="c1">//If $ is having Deferred - use it.</span></div><div class='line' id='LC144'><br/></div><div class='line' id='LC145'>&nbsp;&nbsp;<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC146'><br/></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">switch</span> <span class="p">(</span><span class="nx">method</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s2">&quot;read&quot;</span><span class="o">:</span></div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">resp</span> <span class="o">=</span> <span class="nx">model</span><span class="p">.</span><span class="nx">id</span> <span class="o">!=</span> <span class="kc">undefined</span> <span class="o">?</span> <span class="nx">store</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">model</span><span class="p">)</span> <span class="o">:</span> <span class="nx">store</span><span class="p">.</span><span class="nx">findAll</span><span class="p">();</span></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s2">&quot;create&quot;</span><span class="o">:</span></div><div class='line' id='LC152'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">resp</span> <span class="o">=</span> <span class="nx">store</span><span class="p">.</span><span class="nx">create</span><span class="p">(</span><span class="nx">model</span><span class="p">);</span></div><div class='line' id='LC153'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s2">&quot;update&quot;</span><span class="o">:</span></div><div class='line' id='LC155'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">resp</span> <span class="o">=</span> <span class="nx">store</span><span class="p">.</span><span class="nx">update</span><span class="p">(</span><span class="nx">model</span><span class="p">);</span></div><div class='line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s2">&quot;delete&quot;</span><span class="o">:</span></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">resp</span> <span class="o">=</span> <span class="nx">store</span><span class="p">.</span><span class="nx">destroy</span><span class="p">(</span><span class="nx">model</span><span class="p">);</span></div><div class='line' id='LC159'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC161'><br/></div><div class='line' id='LC162'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">error</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">error</span><span class="p">.</span><span class="nx">code</span> <span class="o">===</span> <span class="nx">DOMException</span><span class="p">.</span><span class="nx">QUOTA_EXCEEDED_ERR</span> <span class="o">&amp;&amp;</span> <span class="nx">store</span><span class="p">.</span><span class="nx">_storageSize</span><span class="p">()</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">errorMessage</span> <span class="o">=</span> <span class="s2">&quot;Private browsing is unsupported&quot;</span><span class="p">;</span></div><div class='line' id='LC165'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span></div><div class='line' id='LC166'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">errorMessage</span> <span class="o">=</span> <span class="nx">error</span><span class="p">.</span><span class="nx">message</span><span class="p">;</span></div><div class='line' id='LC167'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC168'><br/></div><div class='line' id='LC169'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">resp</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC171'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">VERSION</span> <span class="o">===</span> <span class="s2">&quot;0.9.10&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">(</span><span class="nx">model</span><span class="p">,</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">(</span><span class="nx">resp</span><span class="p">);</span></div><div class='line' id='LC175'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">syncDfd</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC178'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">syncDfd</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="nx">resp</span><span class="p">);</span></div><div class='line' id='LC179'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC180'>&nbsp;&nbsp;</div><div class='line' id='LC181'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">errorMessage</span> <span class="o">=</span> <span class="nx">errorMessage</span> <span class="o">?</span> <span class="nx">errorMessage</span></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="s2">&quot;Record Not Found&quot;</span><span class="p">;</span></div><div class='line' id='LC184'><br/></div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">error</span><span class="p">)</span></div><div class='line' id='LC186'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">VERSION</span> <span class="o">===</span> <span class="s2">&quot;0.9.10&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC187'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="nx">model</span><span class="p">,</span> <span class="nx">errorMessage</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="nx">errorMessage</span><span class="p">);</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC191'><br/></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">syncDfd</span><span class="p">)</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">syncDfd</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="nx">errorMessage</span><span class="p">);</span></div><div class='line' id='LC194'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC195'><br/></div><div class='line' id='LC196'>&nbsp;&nbsp;<span class="c1">// add compatibility with $.ajax</span></div><div class='line' id='LC197'>&nbsp;&nbsp;<span class="c1">// always execute callback for success and error</span></div><div class='line' id='LC198'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">complete</span><span class="p">)</span> <span class="nx">options</span><span class="p">.</span><span class="nx">complete</span><span class="p">(</span><span class="nx">resp</span><span class="p">);</span></div><div class='line' id='LC199'><br/></div><div class='line' id='LC200'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">syncDfd</span> <span class="o">&amp;&amp;</span> <span class="nx">syncDfd</span><span class="p">.</span><span class="nx">promise</span><span class="p">();</span></div><div class='line' id='LC201'><span class="p">};</span></div><div class='line' id='LC202'><br/></div><div class='line' id='LC203'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">ajaxSync</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">sync</span><span class="p">;</span></div><div class='line' id='LC204'><br/></div><div class='line' id='LC205'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">getSyncMethod</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC206'>&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">model</span><span class="p">.</span><span class="nx">localStorage</span> <span class="o">||</span> <span class="p">(</span><span class="nx">model</span><span class="p">.</span><span class="nx">collection</span> <span class="o">&amp;&amp;</span> <span class="nx">model</span><span class="p">.</span><span class="nx">collection</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC207'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">localSync</span><span class="p">;</span></div><div class='line' id='LC208'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC209'><br/></div><div class='line' id='LC210'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">ajaxSync</span><span class="p">;</span></div><div class='line' id='LC211'><span class="p">};</span></div><div class='line' id='LC212'><br/></div><div class='line' id='LC213'><span class="c1">// Override &#39;Backbone.sync&#39; to default to localSync,</span></div><div class='line' id='LC214'><span class="c1">// the original &#39;Backbone.sync&#39; is still available in &#39;Backbone.ajaxSync&#39;</span></div><div class='line' id='LC215'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">sync</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC216'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">getSyncMethod</span><span class="p">(</span><span class="nx">model</span><span class="p">).</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="p">[</span><span class="nx">method</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">options</span><span class="p">]);</span></div><div class='line' id='LC217'><span class="p">};</span></div><div class='line' id='LC218'><br/></div><div class='line' id='LC219'><span class="k">return</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">LocalStorage</span><span class="p">;</span></div><div class='line' id='LC220'><span class="p">}));</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1359500886" height="64" width="64">
</div>


        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="/about">About us</a></dd>
        <dd><a href="/blog">Blog</a></dd>
        <dd><a href="/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.06216s from fe19.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>
    <ul id="legal">
        <li><a href="/site/terms">Terms of Service</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/jeromegn/Backbone.localStorage/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="octicon octicon-remove-close ajax-error-dismiss"></a>
    </div>

    
    <span id='server_response_time' data-time='0.06255' data-host='fe19'></span>
    
  </body>
</html>

