package com.morning.entity.statistics;

import java.util.Date;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * 
*    
* 项目名称：morning Maven Webapp   
* 类名称：StatisticsDay   
* 类描述：   网站统计实体类
* 创建人：陈星星   
* 创建时间：2016年10月2日 上午2:29:30   
* 修改人：陈星星   
* 修改时间：2016年10月2日 上午2:29:30   
* 修改备注：   
* @version    
*
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class StatisticsDay extends SecurityException{
	
	private static final long serialVersionUID = -1624793003739254732L;
	/**统计编号*/
	private Integer statisticsId;
	/**统计日期*/
    private Date statisticsTime;
	/**生成时间*/
    private Date createTime;
	/**登录人数*/
    private Integer dailyLoginNumber;
	/**每日访客数*/
    private Integer dailyUserNumber;
	/**每日游览数*/
    private Integer dailyVisitNumber;
	/**每日订单数*/
    private Integer dailyOrderNumber;
	/**每日支付订单数*/
    private Integer dailyPayOrderNumber;
	/**每日未支付订单数*/
    private Integer dailyUnpayOrderNumber;
	/**每日支付金额数*/
    private Double dailyPayNumber;
}