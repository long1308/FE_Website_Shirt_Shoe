import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Item } from "..";
type Props = {
  data: any;
  defaultValue: string;
};
export default function CustomTabs({ data, defaultValue }: Props) {
  return (
    <Tabs value={defaultValue} >
      <TabsHeader className="w-3/5 mx-auto">
        {data.map(({ label, value }: any) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value }: any) => (
          <TabPanel key={value} value={value} className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4 px-4 mt-5">
            <Item icon={"AiOutlineHeart"} />
            <Item icon={"AiOutlineHeart"} />
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
