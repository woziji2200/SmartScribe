export default ig;
declare var ig: import("vue").DefineComponent<Readonly<import("vue").ComponentPropsOptions<{
    [x: string]: unknown;
}>>, {
    wrapperEle: import("vue").Ref<any>;
    svgEle: import("vue").Ref<any>;
    gEle: import("vue").Ref<any>;
    style: {
        container: string;
        "svg-wrapper": string;
        "asst-svg": string;
        svg: string;
        trigger: string;
        dragging: string;
        "add-btn": string;
        hidden: string;
        "expand-btn": string;
        text: string;
        selected: string;
        content: string;
        root: string;
        edited: string;
        outline: string;
        collapse: string;
        "button-list": string;
        "right-bottom": string;
        "right-top": string;
        disabled: string;
        gps: string;
        fit: string;
        download: string;
        prev: string;
        next: string;
        close: string;
    };
    asstSvgEle: import("vue").Ref<any>;
    foreignEle: import("vue").Ref<any>;
    foreignDivEle: import("vue").Ref<any>;
    centerView: () => void;
    fitView: () => void;
    download: () => void;
    menu: import("vue").ComputedRef<{
        name: string;
        disabled: boolean;
    }[][]>;
    contextmenuPos: import("vue").Ref<{
        left: number;
        top: number;
    }>;
    onClickMenu: (A: any) => void;
    next: () => void;
    prev: () => void;
    hasPrev: import("vue").Ref<boolean>;
    hasNext: import("vue").Ref<boolean>;
    wrapperEle2: (A: any, t: any) => void;
    svgEle2: (A: any, t: any) => void;
    gEle2: (A: any, t: any) => void;
    asstSvgEle2: (A: any, t: any) => void;
    foreignEle2: (A: any, t: any) => void;
    foreignDivEle2: (A: any, t: any) => void;
    wrapperEleId: any;
    svgEleId: any;
    gEleId: any;
    asstSvgEleId: any;
    foreignEleId: any;
    foreignDivEleId: any;
}, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<readonly string[] | import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
    [x: string]: unknown;
}>>>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    [x: number]: string;
} | {}>;
