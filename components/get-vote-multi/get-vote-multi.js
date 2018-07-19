Component({
	/*属性列表*/
	properties:{
		items:{
			type: Array,
			value: []
		},
		anonymousFlag:{
			type:String,
			value:'1'
		},
		color:{
			type:String,
			value:'#5e2aff'
		},
		isImage:{
			type:Boolean,
			value:true
		},
		showResult:{
			type:Boolean,
			value:false
		}
	},
	attached(){
		this.setData({
			isImage : ['',undefined].indexOf(this.data.items[0].imgSrcUrl) == -1
		})
	},
	/**
	 * 组件的方法列表
	 */
	methods:{
		checkboxChange(e){
			this.triggerEvent('CheckboxChange',e.detail.value)
		}
	}
})