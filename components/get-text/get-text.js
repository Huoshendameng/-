/**
 * 这个引用方式excited
 <get-rate
	 items="data"
	 bindblur="textBlurHandle"
 ></get-rate>
 --------------搞个大新闻----------------
 data数据结构
 data:[{id:1,questionContent:''}]
 -------------学习一个-------------------
 */

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        // itemData
        'items': {
            type: Array,
            value: []
        }
    },

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: {
		textInputHandle(e){
		    if(typeof this.data.items[0] == 'undefined'){
		        this.data.items = [
                    {
                        questionContent: '',
                        checked: false
                    }
                ]
            }
			this.data.items[0].questionContent = e.detail.value
			this.data.items[0].checked = e.detail.value.trim()!=''
    		this.triggerEvent('TextInputHandle',this.data.items)
		}
    }
})
