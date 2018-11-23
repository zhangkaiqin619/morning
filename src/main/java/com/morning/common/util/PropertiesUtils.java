package com.morning.common.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Properties;

/**
 * 
 * @description：读取配置通用处理工具类
 * @author CXX
 * @version 创建时间：2016年8月19日  上午11:17:51
 */
public class PropertiesUtils {
	
    private static Properties properties = new Properties();

    /**
     * 读取配置文件
     * @param fileName
     */
    public static void readProperties(String fileName){
        try {
            InputStream in = PropertiesUtils.class.getResourceAsStream("/"+fileName);
            BufferedReader bf = new BufferedReader(new  InputStreamReader(in,"UTF-8"));
            properties.load(bf);
        }catch (IOException e){
            e.printStackTrace();
        }
    }

    /**
     * 根据key读取对应的value
     * @param key
     * @return
     */
    public static String getProperty(String key){
        return properties.getProperty(key);
    }
}
