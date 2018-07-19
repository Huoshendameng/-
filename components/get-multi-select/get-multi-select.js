/**
 * 这个引用方式excited
 <get-multi-select
	 items="data"
	 bindInputClick="inputClick"
	 bindInputChange="inputChange"
	 bindCheckboxChange="checkboxChange"
 ></get-multi-select>
 --------------搞个大新闻----------------
 data数据结构
 data:[{id:1,checked:false,otherBankItemFlag:false,questionContent:'毕竟你们还too young'}]
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
        },
        'isFullBorder': {
            type: Boolean,
            value: false,
        },
        'type':{
            type: Number,
            value: ''
        }

    },

    /**
     * 组件的初始数据
     */
    data: {
    	isInputClick:false
	},

    /**
     * 组件的方法列表
     */
    methods: {
    	/*多选变化监听*/
		checkboxChange(e){
			/*避免与输入框点击事件冲突*/
			if(!this.data.isInputClick){
				const selected = e.detail.value,items = this.data.items
				items.map(function (value) {
					value.checked = false
					selected.indexOf(value.id.toString()) > -1 ? value.checked = true : ''
				})
				this.setData({items:items})
			}
			/*return 数据*/
			this.triggerEvent('CheckboxChange',this.data.items)
			/*重置是否为input点击标志*/
			this.setData({isInputClick:false})
        },
		/*输入框点击事件*/
		inputClick(e){
		    const i = parseInt(e.currentTarget.dataset.index),items = this.data.items
			//将被点击的checkbox的checked置为true
            items[i].checked = true
			this.setData({
				items:items,
				isInputClick:true
			})
        },
		/*输入框输入事件*/
		inputChange(e){
			const i = parseInt(e.currentTarget.dataset.index),items = this.data.items
			//将被点击的checkbox的checked置为true
			items[i].checked = true
			//将输入的内容放到回传的data里
			items[i].desc = e.detail.value
			this.setData({items:items})
			//向父组件回传数据
			this.triggerEvent('InputChange',items)
        },
        /*点击图片预览图片*/
        viewImg(e){
            const viewIndex = e.currentTarget.dataset.index;
            let imgList = [];
            this.data.items.forEach(item => {
                if(item.imgSrcUrl && imgList.imgSrcUrl != ''){
                    imgList.push(item.imgSrcUrl)
                }
            });
            wx.previewImage({
                current: imgList[viewIndex],
                urls: imgList
            })
        }
    }
})
