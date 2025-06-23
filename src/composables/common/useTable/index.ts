import { PaginationProps } from 'naive-ui';
import XLSX from 'xlsx';

export const useTable = <T>() => {
  const { isLoading, withLoading } = useLoading();
  const tableData = ref<T[]>();

  // :pagination="pagination" on Table page of src\views\feature\base-table.vue and show type error
  // const pagination: Ref<PaginationProps> solves ts type error
  const pagination: Ref<PaginationProps> = ref({
    page: 1,
    pageSize: 20,
    pageSizes: [5, 10, 15, 20, 30],
    pageCount: 10,
    showSizePicker: true,
    showQuickJumper: true,
    // (onChange | onUpdatePageSize) custom method
  });

  // get table data method
  interface ResponseTableData {
    list: T[];
    total: number;
  }

  const getTableData = async (callback: () => Promise<ResponseTableData>) => {
    let result: ResponseTableData = {
      list: [],
      total: 0,
    };
    const response = await withLoading(async () => {
      // @ts-expect-error
      const { data } = (await callback()) as { data: ResponseTableData };
      tableData.value = data.list;
      return data;
    });
    if (response) {
      result = response;
    }
    return result;
  };

  // export table data to excel file
  const exportExcel = (sheetName: string, fileName: string, headerName?: string[], sourceData?: unknown[]) => {
    let worksheet: XLSX.WorkSheet;

    if (sourceData) {
      worksheet = XLSX.utils.json_to_sheet(sourceData);
    } else {
      worksheet = XLSX.utils.json_to_sheet(tableData.value ?? []);
    }

    const workbook = XLSX.utils.book_new();

    if (headerName) {
      XLSX.utils.sheet_add_aoa(worksheet, [headerName], { origin: 'A1' });
    }

    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName ?? 'Sheet1');

    XLSX.writeFile(workbook, `${fileName}.xlsx`, { compression: true });
  };

  return {
    isLoading,
    pagination,
    tableData,

    getTableData,
    exportExcel,
  };
};
