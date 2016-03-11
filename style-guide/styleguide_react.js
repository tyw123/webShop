/**
 * Created by tyw on 16-3-11.
 */
var userData={account:"我的账户",items:["登陆","注册"]}



var BrandFooter=React.createClass({
    render:function(){
        return(
            <div id="brandFooter">
                brandFooter
                <HomeFooter />
                <ul className="nav navbar-nav navbar-left brand_footer">
                    <li role="presentation" className="info">
                        <p title="Phone" className="text-left">售前服务热线：400-700-0333</p>
                        <p title="Phone" className="text-left">技术支持服务热线：400-700-0303</p>
                    </li>
                    <li role="presentation">
                        <h1 className="cleanfix"><a href="http://www.dji.com/" target="_blank">大疆创新</a></h1>
                    </li>
                </ul>
            </div>
        );
    }
});

var HomeFooter=React.createClass({
    render:function(){
        return(
            <ul className="nav navbar-nav home_footer">
                <li role="presentation">
                    <h4><strong>Contact Us</strong></h4>
                    <p><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span>152****7707</p>
                    <p><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>106****674@qq.com</p>
                    <p><span className="glyphicon glyphicon-home" aria-hidden="true"></span>guess where</p>
                </li>
                <li role="presentation">
                    <h4><strong>About Us</strong></h4>
                    <p>我们是五月的花海，用青春拥抱时代；</p>
                    <p>我们是初升的太阳，用生命点燃未来。</p>
                    <p>我们是一群专注卖无人机，卖好无人机的四有好青年。</p>
                </li>
                <li role="presentation">
                    <h4><strong>What's More</strong></h4>
                    <p><a href="#">创客社区</a></p>
                    <p><a href="#">开发者论坛</a></p>
                    <p><a href="#">加入我们</a></p>
                </li>
            </ul>
        );
    }
});

var Footer=React.createClass({
    render:function(){
        return(
            <footer >
                <div className="container">
                    <nav className="navbar " role="navigation">
                        <h3>footer</h3>
                        <HomeFooter />
                        <BrandFooter />
                    </nav>
                </div>
            </footer>
        );
    }
});

var Brand=React.createClass({
    render:function(){
        return(
            <div className="brand">
                <h4>大疆</h4>
                <a href="#">
                    <img src="pic/dji.jpg" className="img-responsive"></img>
                </a>
            </div>
        );
    }
});

var BrandBox=React.createClass({
    render:function(){
        return(
            <div id="brand">
                <Brand />
                <Brand />
            </div>
        );
    }
});

var ThumbnailToolGroup=React.createClass({
    render:function(){
        return(
            <div className="thumbnail_tool_group">
                <button type="button" className="btn btn-lightBlu" aria-label="Left Align" id="quikeview">
                    QuikeView
                </button>
                <button type="button" className="btn btn-lightBlu" aria-label="Left Align" id="bigger">
                    <span className="glyphicon glyphicon-zoom-in" aria-hidden="true"></span>
                </button>
                <button type="button" className="btn btn-lightBlu" aria-label="Left Align" id="heart">
                    <span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
                </button>
                <button type="button" className="btn btn-lightBlu" aria-label="Left Align" id="add">
                    <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                </button>
            </div>
        );
    }
});

var Thumbnail = React.createClass({
    render: function () {
        return (
            <div className="thumbnail">
                <img src="pic/phantom3.jpg" alt="..."></img>
                <ThumbnailToolGroup />
                <div className="caption">
                    <strong>name</strong>
                    <div className="back_blue">
                        <small>￥<strong>XXXX</strong>/RMB</small>
                    </div>
                    <p>...</p>
                </div>
            </div>
        );
    }
});

var ThumbnailBox=React.createClass({
    render:function(){
        return(
            <div id="thumbnail_box">
                thumbnail_box
                <Thumbnail />
                <Thumbnail />
            </div>
        );
    }
});

var JumbotromSlideNav=React.createClass({
    render:function(){
        return(
            <div className="slide_nav">
                <i></i>
                <i className="active"></i>
            </div>
        );
    }
});

var JumbotromToolGroup=React.createClass({
    render:function(){
        return(
            <div className="tool_group">
                <span className="glyphicon glyphicon-menu-left prev" aria-hidden="true"></span>
                <span className="glyphicon glyphicon-menu-right next" aria-hidden="true"></span>
            </div>
        );
    }
});

var JumbotromPic=React.createClass({
    render:function(){
        return(
            <div className="jumbotron cleanfix">
                <div className="container">
                    <img alt="Brand" className="img-responsive hidden" src="pic/djisale.jpg"></img>
                    <img alt="Brand" className="img-responsive " src="pic/djisale2.jpg"></img>
                </div>
            </div>
        );
    }
});

var Jumbotron=React.createClass({
    render:function(){
        return(
            <div id="jumbotron">
                jumbotron
                <JumbotromPic />
                <JumbotromToolGroup />
                <JumbotromSlideNav />
            </div>
        );
    }
});

var CartItem=React.createClass({
    render:function(){
        return(
            <tr>
                <td>
                    <input className="btn btn-default" type="checkbox"></input>
                    <img src="pic/phantom3.jpg" width="150"></img>
                    name
                </td>
                <td>
                    <small>￥<s>xxxx</s><strong>XXXX</strong>/RMB</small>
                </td>
                <td>
                    <div className="input-group num-set">
                        <input type="number" className="form-control" placeholder="1"></input>
                    </div>
                </td>
                <td>
                    <small>￥<s>xxxx</s><strong>XXXX</strong>/RMB</small>
                </td>
                <td>
                    <button type="button" className="btn btn-lightBlu" aria-label="Left Align">
                        <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                    </button>
                </td>
            </tr>
        );
    }
});

var Cart=React.createClass({
    render:function(){
        return(
            <div className="panel">
                <div className="panel-heading" >
                    我的购物车
                </div>
                <div className="panel-body" >
                    <table className="table cleanfix" >
                        <thead>
                        <tr>
                            <th>商品</th>
                            <th>价格</th>
                            <th>数量</th>
                            <th>小计</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            <CartItem />
                            <CartItem />
                        </tbody>
                    </table>
                    <div className="tfoot col-md-4">
                        <div className="text-right col-md-8">
                            <p className="cleanfix">共计￥XXXX</p>
                            <p className="cleanfix">已节省￥XXXX</p>
                        </div>
                        <button type="button" className="btn btn-lightBlu col-md-4" aria-label="Left Align">
                            去结算
                            <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
});

var HarvestInfo=React.createClass({
    render:function(){
        return(
            <tr>
                <td>
                    <input className="btn btn-default" type="radio" name="buyer"></input>
                        name
                </td>
                <td>
                    address
                </td>
                <td>
                    phone
                </td>
                <td>
                    <button type="button" className="btn btn-lightBlu" aria-label="Left Align">
                        <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                    </button>
                    <button type="button" className="btn btn-lightBlu" aria-label="Left Align">
                        <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                    </button>
                </td>
            </tr>
        );
    }
});

var HarvestConfirm=React.createClass({
    render:function(){
     return(
         <div className="panel">
             <div className="panel-heading">
                 确认收货信息
             </div>
             <div className="panel-body">
                 <table className="table cleanfix">
                     <thead>
                     <tr>
                         <th>收货人</th>
                         <th>收货地址</th>
                         <th>联系方式</th>
                         <th> </th>
                     </tr>
                     </thead>
                     <tbody className="flex-center users">
                        <HarvestInfo />
                        <HarvestInfo />
                     </tbody>
                 </table>
                 <div className="tfoot">
                     <button type="button" className="btn btn-lightBlu" aria-label="Left Align">
                         <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                         新增收货地址
                     </button>
                 </div>
             </div>
         </div>
     );
    }
});

var Table=React.createClass({
    render:function(){
        return(
            <div id="table">
                table
                <HarvestConfirm />
                <Cart />
            </div>
        );
    }
});

var Input=React.createClass({
    render:function(){
        return(
            <div id="input">
                input button
                <div className="input-group searchSingle">
                    <input type="text" className="form-control"></input>
                    <span className="input-group-btn">
                        <button className="btn btn-black">
                            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                        </button>
                    </span>
                </div>
                <input className="btn btn-default" type="radio" name="buyer"></input>
                <input className="btn btn-default" type="checkbox"></input>
                <div className="input-group searchBoth">
                    <input type="text" className="form-control"></input>
                    <span className="input-group-btn">
                        <button className="btn btn-black">搜全站</button>
                    </span>
                    <span className="input-group-btn">
                        <button className="btn btn-black">搜本店</button>
                    </span>
                </div>
                <input type="number" className="form-control num-set" placeholder="1"></input>

            </div>
        );
    }
});

var Button=React.createClass({
    render:function(){
        return(
            <div id="button">
                button
                <button type="button" className="btn-lightBlu" aria-label="Left Align">
                    <span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
                </button>
                <button type="button" className="btn-lightBlu" aria-label="Left Align">
                    <span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
                    继续购物
                </button>
                <button type="button" className="btn-lightBlu" aria-label="Left Align">
                    <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
                </button>
                <button type="button" className="btn-lightBlu" aria-label="Left Align">
                    去结算
                    <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
                </button>
                <button type="button" className="btn-lightBlu" aria-label="Left Align">
                    <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                </button>
                <button type="button" className="btn-lightBlu" aria-label="Left Align">
                    <span className="glyphicon glyphicon-zoom-in" aria-hidden="true"></span>
                </button>
                <button type="button" className="btn-lightBlu" aria-label="Left Align">
                    <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                </button>
                <button type="button" className="btn-lightBlu" aria-label="Left Align">
                    <span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
                </button>
                <button type="button" className="btn-lightBlu" aria-label="Left Align">
                    <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                </button>
                <button type="button" className="btn-lightBlu" aria-label="Left Align">
                    <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                    新增收货地址
                </button>
                <button type="button" className="btn-lightBlu" aria-label="Left Align">
                    更多
                </button>
                <button type="button" className="btn-lightBlu" aria-label="Left Align">
                    QuikeView
                </button>
            </div>
        );
    }
});

var BrandNav=React.createClass({
    render:function(){
        return(
            <nav className="navbar navbar-default" role="navigation">
                brandNav
                <ul className="nav navbar-nav navbar-left">
                    <li role="presentation"><a href="#">brandProduct1</a></li>
                    <li role="presentation"><a href="#">brandProduct2</a></li>
                    <li role="presentation"><a href="#">brandProduct3</a></li>
                    <li role="presentation"><a href="#">brandProduct4</a></li>
                </ul>
            </nav>
        );
    }
});

var GlobalWrapper=React.createClass({
    render:function(){
        return(
            <ul className="nav navbar-nav navbar-right global_wrapper">
                <li><a href="#" className="upLine">item1</a></li>
                <li><a href="#" className="upLine">item1</a></li>
                <li><a href="#" className="upLine">item1</a></li>
                <li><a href="#" className="upLine">item1</a></li>
                <li>
                    <a href="#">
                        <div className="input-group searchBoth">
                            <input type="text" className="form-control"></input>
                            <span className="input-group-btn">
                                <button className="btn btn-black">搜全站</button>
                            </span>
                            <span className="input-group-btn">
                                <button className="btn btn-black">搜本店</button>
                            </span>
                        </div>
                    </a>
                </li>
            </ul>

        );
    }
});

var Logo=React.createClass({
    render: function(){
        return(
            <ul className="nav navbar-nav logo ">
                <li role="presentation" >
                    <a href="#"><h1>UAV Shop </h1></a>
                </li>
                <li>
                    <a href="#">logo2</a>
                </li>
            </ul>
        );
    }
});

var ShopNav=React.createClass({
    render:function(){
        return(
            <nav className="navbar navbar-default shopNav" role="navigation">
                <div className="container">
                    shopNav
                    <Logo />
                    <GlobalWrapper />
                </div>
            </nav>
        );
    }
});

var ShopCart=React.createClass({
    render:function(){
        return(
            <li role="presentation">
                shopCart
                <a href="#">
                    购物车
                    <span className="badge">14</span>
                </a>
            </li>
        );
    }
});

var UserAccount=React.createClass({
    render:function(){
        return(
            <li className="dropdown">
                userAccount
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    我的账户
                    <b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                    <li><a href="#">登陆</a></li>
                    <li><a href="#">注册</a></li>
                    <li><a href="#">退出登陆</a></li>
                </ul>
            </li>
        );
    }
});

var  UserNav=React.createClass({
    render:function(){
        return(
            <div className="userNav">
                <div className="container">
                    userNav
                    <ul>
                        <UserAccount />
                        <ShopCart />
                        <li role="presentation"><a href="#">收藏夹</a></li>
                        <li role="presentation"><a href="#">客户服务</a></li>
                    </ul>
                </div>
            </div>
        );
    }
});

var Header = React.createClass({
    render: function() {
        return (
            <header>
                <h3>header</h3>
                <UserNav />
                <ShopNav />
            </header>
        );
    }
});

var StyleGuide=React.createClass({
    render:function(){
        return(
            <div>
                <h1>home</h1>
                <Header />
                <Jumbotron />
                <div className="container">
                    <BrandNav />
                    <Button />
                    <Input/>
                    <Table />
                    <ThumbnailBox />
                    <BrandBox />
                </div>
                <Footer />

            </div>
        );
    }
});

React.render(
    <StyleGuide />,
    document.getElementById('content')
);