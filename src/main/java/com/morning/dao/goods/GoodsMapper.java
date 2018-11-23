package com.morning.dao.goods;

import java.util.List;
import java.util.Map;

import com.morning.entity.goods.Goods;
import com.morning.entity.order.OrderMessage;

/**
 * 
*    
* 项目名称：morning Maven Webapp   
* 类名称：GoodsMapper   
* 类描述：商品信息数据访问层接口   
* 创建人：陈星星   
* 创建时间：2016年11月6日 下午10:31:39   
* 修改人：陈星星   
* 修改时间：2016年11月6日 下午10:31:39   
* 修改备注：   
* @version    
*
 */
public interface GoodsMapper {
	
	/**
	 * 添加商品
	 * @param goods
	 * @return
	 */
	public int createGoods(Goods goods);
	
	/**
	 * 更新商品
	 * @param goods
	 */
	public void updateGoods(Goods goods);
	
	/**
	 * 查询商品，通过ID
	 * @param orderId
	 * @return
	 */
	public Goods queryGoodsById(Integer goodsId);
	
	/**
	 * 查询商品，排序游览量、销售量、收藏量、提问数等
	 * @param parameter  QueryGoods查询条件
	 * @return
	 */
	public List<Goods> queryGoods(Map<String,Object> parameter);
	
	/**
	 * 前台查询课程列表
	 * @param parameter
	 * @return   QueryGoods查询条件、PageInfo分页条件
	 */
	public List<Goods> queryWebGoodsListPage(Map<String,Object> parameter);
	
	/**
	 * 查询商品数量
	 * @param parameter QueryGoods查询条件
	 * @return
	 */
	public int queryGoodsCount(Map<String,Object> parameter);
	
	/**
	 * 更新课程数据（浏览数）
	 * @param parameter (String type,Integer goodsId)
	 * String type：pageViewcount浏览数
	 */
	public void updateGoodsCount(Map<String,Object> parameter);
	
	/**
     * 根据商品订单详情表更新商品销量和库存
     * @param orderMessageFormList
     * @return
     */
	public void updateGoodsCountList(OrderMessage orderMessage);
	
}
