// components/get-progress/get-progress.js

/**
 * 引用方式

<get-progress class="test" 
    percent="{{progressNum}}" 
    strokeWidth="5rpx" 
    animationTime="0.3s"
    backgroundColor="#000"
    activeColor="#fff"
>
</get-progress>

 */

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        // 百分比
        'percent': {
            type: Number,
            value: 0
        },
        // 线宽度
        'strokeWidth': {
            type: String,
            value: '6rpx'
        },
        // 背景色
        'backgroundColor': {
            type: String,
            value: '#ccc'
        },
        // 进度条颜色
        'activeColor': {
            type: String,
            value: '#2e5aff'
        },
        // 动画时间
        'animationTime': {
            type: String,
            value: '0.2s'
        },
        //外间距
        'margin':{
            type:String,
            value:'0'
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

    }
})
