import * as b from "bobril";

// credits https://github.com/krewi1

export interface HtmlProps {
    element: Element;
}

export function HtmlWrapper(props: HtmlProps) {
    const cacheNodeRef = b.useRef<b.IBobrilCacheNode>();
    b.useEffect(() => {
        const el = b.getDomNode(cacheNodeRef.current) as Element;
        el.appendChild(props.element);
    }, []);
    return <div ref={cacheNodeRef}/>;
}

export function HtmlWrapperExample() {
    const el = document.createElement("div");
    el.style.color = "red";
    el.innerText = "Test";

    return <HtmlWrapper element={el}/>
}