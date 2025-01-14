import React, { useCallback, useLayoutEffect, useMemo, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu, Tooltip } from "antd";

import {
  DocumentChartBarIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

type MenuItem = {
  label: React.ReactNode;
  key: string;
  path?: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
};

const menus = [
  "/dashboard",
  "/employees",
  "/branches",
  "/items",
  "/customers",
  "/marketings",
  "/supervisors",
  "/orders",
];

const menuPathKey = (path: string) => {
  const index = menus.findIndex(m => path === m)
  return index !== -1 ? index.toString() : '-'
}

const pathKey = (path: string) => {
  const index = menus.findIndex(m => path.includes(m))
  return index !== -1 ? index.toString() : '-'
}

interface MenusProps {
  isOpen: boolean;
  onClick?: () => void;
}

const Menus = ({ isOpen, onClick }: MenusProps) => {
  const path = usePathname();

  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const getItem = useCallback(
    ({
      icon,
      key,
      path = "",
      children,
      label,
    }: {
      label: React.ReactNode;
      key?: React.Key;
      path?: string;
      icon?: React.ReactNode;
      children?: MenuItem[];
    }): MenuItem => {
      return {
        key: key ?? menuPathKey(path),
        icon,
        label: children ? (
          label
        ) : (
          <Tooltip title={label}>
            <Link
              href={path}
              onClick={() => {
                if (onClick) onClick();
              }}
            >
              {label}
            </Link>
          </Tooltip>
        ),
        children,
      } as MenuItem;
    },
    [onClick]
  );

  const dashboardSubMenu = useMemo(
    () => [
      {
        path: getItem({
          path: "/dashboard",
          label: "Dashboard",
          icon: (
            <ChartBarIcon
              className="self-center flex-shrink-0 h-5 w-5 "
              aria-hidden="true"
            />
          ),
        }),
        isAllowed: true,
      },
    ]
      .filter(route => route.isAllowed)
      .map(route => route.path),
    [getItem]
  )

  const itemSubMenu = useMemo(
    () => [
      {
        path: getItem({
          path: "/items",
          label: "Items",
          icon: (
            <DocumentChartBarIcon
              className="self-center flex-shrink-0 h-5 w-5 "
              aria-hidden="true"
            />
          ),
        }),
        isAllowed: true,
      },
    ]
      .filter(route => route.isAllowed)
      .map(route => route.path),
    [getItem]
  )

  const items = useMemo(
    () => [
      ...dashboardSubMenu,
      ...itemSubMenu,
    ],
    [itemSubMenu]
  );

  const handleOpenKeys = useCallback(() => {
    if (!items.find(item => item?.key === pathKey(path ?? ''))) {
      const currentSubItem = items.find(
        item =>
          items.find(item => item?.key === pathKey(path ?? '')) ||
          item?.children?.find(item => item.key === pathKey(path ?? '')),
      )
      if (currentSubItem) setOpenKeys([currentSubItem.key])
      return
    }
    setOpenKeys([])
  }, [items, path])

  useLayoutEffect(() => {
    if (isOpen) handleOpenKeys();
    // added becasue only need to check for initial render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-full relative flex flex-col bg-primary ">
      <div className="overflow-y-auto pb-20">
        <Menu
          mode="inline"
          openKeys={openKeys}
          selectedKeys={[pathKey(path ?? "")]}
          items={items}
          onOpenChange={(openKeys) => {
            setOpenKeys(openKeys);
          }}
        />
      </div>
    </div>
  );
};

export default Menus;
