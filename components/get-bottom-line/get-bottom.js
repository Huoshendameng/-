// components/get-progress/get-progress.js

/**
 * 引用方式

<get-bottom class="bottom"
    strokeWidth="5rpx"
    lineColor="#FFFFFF"
    fontColor="#FFFFFF"
>
</get-bottom>

 */

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        'bottomData':{
            type:Array,
            value:[{content:'京东良研',route:''}]
        },
        // 线宽度
        'strokeWidth': {
            type: String,
            value: '2rpx'
        },
        // 线颜色
        'lineColor': {
            type: String,
			value:'#FFFFFF'
        },
        //字体颜色
        'fontColor':{
            type:String,
            value:'#FFFFFF'
        },
        //左右间距
        'margin':{
            type:String,
            value:'40rpx'
        },
        //底部距离
        'bottom':{
            type:String,
            value:'40rpx'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        bindClickHandle(e){
            if(e.currentTarget.dataset.route!=''){
                switch (e.currentTarget.dataset.route) {
                    case '/pages/mine/mine':
						wx.switchTab({
							url: e.currentTarget.dataset.route
						})
                        break;
                    case '/pages/index/index':
						wx.switchTab({
							url: e.currentTarget.dataset.route
						})
                        break;
                    default:
						wx.navigateTo({
							url: e.currentTarget.dataset.route
						})
                        break;
                }
            }
        }
    }
})
