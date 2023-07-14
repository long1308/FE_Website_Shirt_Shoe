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
import { useEffect, useState } from "react";
import { Skeleton } from "antd";
export default function CustomTabs() {
  const dispatch = useDispatch();
  const dataCategorys = useSelector((state: RootState) => state.categorys);
  const { categorys, isLoading, error } = dataCategorys
  useEffect(() => {
    dispatch(getCategorys() as never)
  }, [dispatch]);
  const handleTabChange = (id: string) => {
    console.log(id);
  };
  return (
    <Tabs value={"Women"} >
      <TabsHeader className="w-3/5 mx-auto">
        {
          isLoading ? (
            <Skeleton />
          ) : error ? (
            "Error....."
          ) : (
            categorys ? (
              categorys.map(cate => (
                <Tab onClick={() => handleTabChange(cate._id || "")} key={cate.name} value={cate.name}>
                  {cate.name}
                </Tab>
              ))
            ) : null
          )
        }
      </TabsHeader>
      {/* <TabsBody>
        {table.map(({ value }: any) => (
          <TabPanel key={value} value={value} className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4 px-4 mt-5">
            <Item icon={"AiOutlineHeart"} />
            <Item icon={"AiOutlineHeart"} />
          </TabPanel>
        ))}
      </TabsBody> */}
    </Tabs>
  );
}
