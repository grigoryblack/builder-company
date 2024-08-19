import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
    MenuOutlined,
    HomeOutlined,
    DesktopOutlined,
    ContainerOutlined,
    OrderedListOutlined,
} from '@ant-design/icons';
import { theme } from "../../../../assets/styles/theme.js";
import { Button, Menu, Drawer, ConfigProvider } from 'antd';

const items = [
    {
        key: '1',
        icon: <HomeOutlined />,
        label: 'О нас',
        sectionId: 'about',
    },
    {
        key: '2',
        icon: <DesktopOutlined />,
        label: 'Option 2',
        sectionId: 'services',
    },
    {
        key: '3',
        icon: <ContainerOutlined />,
        label: 'Option 3',
        sectionId: 'contact',
    },
    {
        key: 'sub1',
        label: 'Услуги',
        icon: <OrderedListOutlined />,
        children: [
            {
                key: '5',
                label: 'Option 5',
                sectionId: 'option5',
            },
            {
                key: '6',
                label: 'Option 6',
                sectionId: 'option6',
            },
            {
                key: '7',
                label: 'Option 7',
                sectionId: 'option7',
            },
            {
                key: '8',
                label: 'Option 8',
                sectionId: 'option8',
            },
        ],
    },
];

const Navigation = () => {
    const [current, setCurrent] = useState('0');
    const [drawerVisible, setDrawerVisible] = useState(false);

    const isMobile = useMediaQuery({ maxWidth: 600 });

    const onClick = (e) => {
        setCurrent(e.key);

        const item = items.flatMap(i => i.children ? i.children : [i]).find(item => item.key === e.key);
        if (item && item.sectionId) {
            document.getElementById(item.sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleDrawer = () => {
        setDrawerVisible(!drawerVisible);
    };

    return (
        <ConfigProvider theme={theme}>
            {isMobile ? (
                <>
                    <Button
                        type="primary"
                        size={"large"}
                        icon={<MenuOutlined />}
                        onClick={toggleDrawer}
                        style={{
                            position: 'absolute',
                            right: '4svw',
                            top: '4svw',
                        }}
                    />
                    <Drawer
                        title="Меню"
                        placement="left"
                        onClose={toggleDrawer}
                        open={drawerVisible}
                        bodyStyle={{ padding: 0 }}
                    >
                        <Menu
                            onClick={onClick}
                            selectedKeys={[current]}
                            mode="inline"
                            items={items}
                        />
                    </Drawer>
                </>
            ) : (
                <Menu
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={items}
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                />
            )}
        </ConfigProvider>
    );
};

export default Navigation;
