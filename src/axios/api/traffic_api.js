import {get, post, put, del} from '../http'
//获取计划施工数据
export const api_getPlans = p => get('roadCondition/info/plans', p);
//获取突发事件数据
export const api_getBursts = p => get('roadCondition/info/bursts', p);
//获取整点路况数据
export const api_getTmcs = p => get('roadCondition/info/tmc', p);
//获取预警信息数据
export const api_getWarnings = p => get('roadCondition/info/warning', p);
//获取路况视频数据
export const api_getVideos = p => get('roadCondition/video', p);
