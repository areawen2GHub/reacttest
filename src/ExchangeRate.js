/**
 * 汇率
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const MoneyTag = {
    Y: 'CNY',
    D: 'Dollar'
}

/**
 * Money组件
 */
class Money extends Component{
    constructor(props){
        super(props);
        //
    }

    /**
     * 输入金额切换状态
     * @param {*} e 
     */
    handle_change(e){
        this.props.handle_change(this.props.tag,e.target.value);
    }

    render(){
        const symbol = this.props.tag === 'Y' ? "Y" : "$";
        return(
            <div>
                <input type="text" value={this.props.num} onChange={(e) => {
                    this.handle_change(e);
                }} />{symbol}
            </div>
        );
    }
}

/**
 * 汇率组件
 */
class ExchangeRate extends Component{
    constructor(props){
        super(props);
        this.state = {
            tag: 'Y',
            num: ''
        }
        //  绑定this
        this.handle_change = this.handle_change.bind(this);
    }

    /**
     * 美元转换成人民币
     * @param {*} num 
     */
    to_cny(num){
        return num * 6.6392;
    }

    /**
     * 人民币转换成美元
     * @param {*} num 
     */
    to_dollar(num){
        return num * 0.1506;
    }

    /**
     * 汇率转换
     * @param {*} tag 
     * @param {*} num 
     */
    exchange_rate_change(tag,num){
        const input = parseFloat(num);
        if(Number.isNaN(input)){
            return '';
        }
        // 转换成美元
        if(tag === 'Y'){
            return Math.round(this.to_dollar(input) * 1000000) / 1000000;
        }
        //  转换成人民币
        return Math.round(this.to_cny(input) * 1000000) / 1000000;;
    }

    /**
     * 改变状态
     * @param {*} tag 
     * @param {*} num 
     */
    handle_change(tag,num){
        this.setState({
            tag: tag,
            num: num
        });
    }

    render(){
        const tag = this.state.tag;
        const num = this.state.num;
        const cny = tag === 'Y' ? num : this.exchange_rate_change(tag,num);
        const dollar = tag === 'D' ? num : this.exchange_rate_change(tag,num);
        return(
            <div>
                <Money tag='Y' num={cny} handle_change={this.handle_change} />
                <Money tag='D' num={dollar} handle_change={this.handle_change} />
            </div>
        );
    }
}

export default ExchangeRate;