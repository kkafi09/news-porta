import NewsLists from "@/Components/Homepage/NewsLists";
import Paginator from "@/Components/Homepage/Paginator";
import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";


export default function Homepage(props) {
    const { data: news, links, meta } = props.news;
    const [allNews, setAllNews] = useState([...news]);

    const loadMoreNews = () => {
        Inertia.get(
            links.next,
            {},
            {
                preserveState: true,
                preserveScroll: true,
                only: ["news"],
                onSuccess: ({ props }) => {
                    setAllNews([...allNews, ...props.news.data]);
                    window.history.replaceState({}, document.title, meta.path);
                },
            }
        );
    };

    return (
        <>
            <div className="min-h-screen bg-slate-50">
                <Head title={props.title} />
                <Navbar />
                <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
                    <InfiniteScroll
                        dataLength={allNews.length}
                        next={loadMoreNews}
                        hasMore={links.next !== null}
                        loader={
                            <h4 style={{ textAlign: "center" }}>Loading...</h4>
                        }
                        endMessage={
                            <p style={{ textAlign: "center" }}>
                                <b>🌹...🌹</b>
                            </p>
                        }
                    >
                        <NewsLists news={allNews} />
                    </InfiniteScroll>
                </div>
            </div>
        </>
    );
}
