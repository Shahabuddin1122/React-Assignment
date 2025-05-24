type SidebarProps = {
    selectedItem: string;
    callbackFunction: (item: string) => void;
    onAddClick: () => void;
};