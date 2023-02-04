/**
 * ant-表格数据分页查询
 */
import { reactive } from "vue";

type IFuncName = () => void;

interface IPagination {
  current: number;
  total: number;
  pageSize: number;
  showQuickJumper?: boolean; // 是否可以快速跳转至某页
  showSizeChanger?: boolean; // 是否可以改变PageSize
  pageSizeOptions?: string[]; // 指定每页可展示多少条的参数集合
  [key: string]: any;
}

/**
 *
 * @param getSourceData 获取表格数据
 * @param sourceData 表格数据对象数组
 * @param options 其他分页配置参数
 */
export default function usePagination(getSourceData: IFuncName, sourceData: any[], options = {}) {
  const onPage = (current: number) => {
    mergeOptions.current = current;
    sourceData.length = 0;
    getSourceData();
  };

  const onSizeChanger = (current: number, size: number) => {
    mergeOptions.current = current;
    mergeOptions.pageSize = size;
    sourceData.length = 0;
    getSourceData();
  };

  const IOptions = reactive<IPagination>({
    current: 1,
    total: 0,
    pageSize: 10,
    pageSizeOptions: ["10", "20", "30"],
    onChange: (current: number) => onPage(current),
    onShowSizeChanger: (current: number, size: number) => onSizeChanger(current, size),
  });

  const mergeOptions = { ...IOptions, ...options };

  const onSearch = () => {
    mergeOptions.current = 1;
    sourceData.length = 0;
    getSourceData();
  };

  return {
    pagination: mergeOptions,
    onSearch,
  };
}
