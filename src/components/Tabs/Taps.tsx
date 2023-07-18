import { getCategorys, getOneCategory } from "../../store/actions/actionCategory";
import { useDispatch, useSelector } from 'react-redux';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Item } from "..";
import { RootState } from "../../store/store";
import { useEffect } from "react";
import { Skeleton } from "antd";
import Loading from "../Loading/Loading";

export default function CustomTabs() {
  const dispatch = useDispatch();
  const dataCategorys = useSelector((state: RootState) => state.categorys);
  const { categorys, isLoading, error, category } = dataCategorys;
  useEffect(() => {
    dispatch(getCategorys() as never);
  }, [dispatch]);
  useEffect(() => {

    if (categorys && categorys.length > 0) {
      const firstCategoryId = categorys[0]._id;
      dispatch(getOneCategory(firstCategoryId!) as never);
    }
  }, [categorys, dispatch]);
  const handleTabChange = (id: string) => {
    dispatch(getOneCategory(id) as never);
  };

  return (
    <>
      {isLoading ? <Loading /> :
        categorys && categorys.length > 0 ? (

          <Tabs value={categorys[0]?.name}>
            <TabsHeader className=" w-3/5 mx-auto">
              {isLoading ? (
                <Skeleton />
              ) : error ? (
                <div className="error min-h-[300px] h-1/2 w-screen flex items-center">
                  <h1 className="text-3xl font-medium italic text-center w-full">Something went wrong !</h1>
                </div>
              ) : categorys ? (
                categorys.map((cate) => (
                  <Tab
                    defaultValue={categorys[0]?.name}
                    onClick={() => handleTabChange(cate._id || "")}
                    key={cate._id}
                    value={cate.name}

                  >
                    {cate.name}
                  </Tab>
                ))
              ) : null}
            </TabsHeader>
            <TabsBody >
              {isLoading ? (
                <Skeleton />
              ) : error ? (
                <div className="error min-h-[300px] h-1/2 w-screen flex items-center">
                  <h1 className="text-3xl font-medium italic text-center w-full">Something went wrong</h1>
                </div>
              ) : category && category.products && category.products.length > 0 ? (

                <TabPanel
                  key={category._id}
                  value={category.name}
                  className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-10 md:gap-1 px-10 md:px-0 mt-5"
                >
                  {category.products.map((product, index) => (
                    <Item key={index} product={product} />
                  ))}
                </TabPanel>

              ) : (
                <div className="error min-h-[300px] h-1/2 w-screen flex items-center">
                  <h1 className="text-xl font-medium italic text-center w-full">No products available.</h1>
                </div>
              )}
            </TabsBody>

          </Tabs>
        ) : <div className="error min-h-[300px] h-1/2 w-screen flex items-center">
          <h1 className="text-xl font-medium italic text-center w-full">No products available.</h1>
        </div>
      }
    </>
  )
}
