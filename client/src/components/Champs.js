import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Champs = () => {

    const [champs, setChamps] = useState([]);

    const getChamps = async () => {
        let result = await axios.get("/api/champs");
        setChamps(result.data);
        console.log(result.data);
    };
  
    useEffect(() => {
        getChamps();
    }, []);

    const renderChamps = () => {
        if (champs.length === 0) {
            return <h2>No champions, me lord!</h2>
        } else {
            return champs.map((champ) => {
                const renderMoves = () => {
                    return champ.moves.map((move) => <p>{move.name}</p>);
                };
                return (
                    <div style={styles.container}>
                        <img src={sample(iconLinks)} alt={"test"} width={"100px"} height={"100px"} />
                        <h2><Link to={`/champs/${champ.id}`} style={styles.link}>{champ.name}</Link></h2>
                        <p>Power level: {champ.power}</p>
                        <p>Ablilities: {renderMoves()}</p>
                    </div>
                )
            })
        }
    }
    
    // addChamp updateChamp and deleteChamp will be here

    // const addChamp = (champ) => {
    //     setChamps([...champs, champ]);
    // };

    // const updateChamp = (champion) => {
    //     let updated = champs.map((champ) => (champ.id === champion.id ? champion : champ));
    //     setChamps(updated);
    // };

    // const deleteChamp = async (id) => {
    //     await axios.delete(`/api/champs/${id}`);
    //     let newChamps = champs.filter((champ) => champ.id !== id);
    //     setChamps(newChamps);
    // };

    const iconLinks = [
        "https://lh3.googleusercontent.com/E83rZOTVoVN6Ux1kHbt25EyQ7nGM3m_F7QqDDOnyz3vBZipMOQmhgzcBEhhl1jAe4NKziE4mvEvFgD861tIoQJgIVk0FopztkVboN5Yf4oq-jZxfn3_wqV2dvOey63EdeT-Dl1JQuTsfLQl7ZEDkyiue6VpTgkKwk8A6qWRpul5wXQ20M2Y-hp-ckkoBn9wdAsdor4YkV3ht9ESv5tfEnHhGTcu221LUcFq1YLgkmt7rtc3giUFK_sZ97F09_TcqlvuA2um3ZTtBhV4h21mT3f7oHWJDBPEKzwa8zGXGaXFFAc4l3CNY-7OZXmiud73OB0sfYwKq-iG1V1NQ_F4Wft3sJzNdtxWwzAVzfSqYjEYXCWSnYKovt0tn8FAiCbo89qWEKPmbeyCQjG6Kh5zAnMZLpd0tSC80wnt2sBMMIsTzqbWsCj1GpDzm_0L92va7XeTxySTiQ2FGaYKu-MBIcPkLJzqggUBAW36TkIzOC5l_w8XIMcyQUJHzeWgEUfzP_p_ahoNVc0kzsQI4jhYLaTgc-TwpjvUeQ5fVABHnaboQWdrvfGiqsQ3Nuei0kdQnprMqlraOkqLh6oS0lPelZzT2GotYYo_pLtrHhQT235DXRmDi1LrnQnJ2-D-aCKIQL7Tzgo_dcPZpxjSlEBQgAueOhSIhYsMq0vT2YV8HUdKmuJdnCCzgh2OxZ1mJcOcA_flJrYRHKWX6XrqJeJUKtXk=s256-no?authuser=0",
        "https://lh3.googleusercontent.com/6YwqwJFuIjYQv6lnjHtUUYwSzXa47t7Q6aKed8jFIQNe5OmD9-Qmq8_Q4yv9RC0PTZW6NP0Jo8AWcCNxvcRxJBMQHFGu3DMAYbw7-7LbLDdGQ3PXMshKGJotQmLY3ACL2Xle9wKX5mDkEuDJTzR88oqlOH0oiLEA3ALw-h_5jVHM1yWz3iJ6fd9rZtLZy30bGZmUL6Roqin42UqWGnh_qabAGH1HBnVR1UKqIy3sJaExZH4QCq0QxrLX0Rv6hMcCnXSXJaBHbj2nysCOVl-_e77cAbJQ17JG1PM5pbZE2Md73QuIDPw2yPpoQYEmcRGiL9ov0e3fU4ii1eIspObbmI-b-2Cra8J_ys28vnJkJqW5npem54-uO3SFD58m8YtzpM5jFOUGz44rtvJyTs9X78MYVX_mmklriYrR-hTaRPDUqRg7HdiCJZEp6_C-uYWtdXa0I1FREQS5MEQo2Bwc1IzzImHUu6q2UmiII-c18AQe9H1w73vQmlzoYCAvZ5KIAsuJueUN6-rrklzhC6x4YBerBjSmMf4zSre1OEI_HUjOBQp-OroXh9Aon3Eixcq1mBzSvpYNSxILJ45ZSNo13hjlVV8Nn6BWk3irf7hZbqj7O2YXRar6QKbHcqnuDDH2ugdAhqEkZY4kkdlSoqzf3EGfdkf3LXfBNeZvYI0_qiUvJbmgCo4dtH73X__HgbG1jItZ1MsB5wVO5ZFFuKFnnVI=s256-no?authuser=0",
        "https://lh3.googleusercontent.com/rfDAiz9cbZUEZ2hE9Ry3O4XaiNzLWriCvB5-kzqb1tMdNWR3lfS0sXHW1JyIT6ktqQudqBI25teqNZSc-ig2FQOWcPhUwfFgE-vReYyY995E7s8o-6xjavINdlLIOoqL8uy1HE-0HUElrz_AMd7ugDU0V4luMJI1jxtFtECl5V16OddSzB7FCQb8egkz3b79HumVfYLzAMXUjtmfm170JVaaRzDtHEAb7cmrb2E0vcRLYcIWHbgpyBEd5oN47Bcp_ctLMM07cjb2GXZphuTuuEAyy4J8r1BOZUPO8KirLniZ5P5XU-HlHj573KL0mfTBDSsXOQqA1MI1Jj2klSSIsAcE6OWESktElr1fc-A-_Ki9ZbJvBLp7PYTygUO_LXH2HDs0cgdtqgQNxbcE_p0lWNTJx68cHQBvyrv_WxuvxorJYNvZqxQfS7POnc4AeD307JazdUiIepFS7TjvATTfPEv1iNlfxsmoyRdMtnP4ZSM_rdE2WsQfXb62XN7y9gl1z4bUbb3W9Pyta0FAGdEVHnldREEEC08YpPgs4VZYvhcXJETV4IZSrnrlp3LPlM_vEqkwCfLBfCMmL0w5WFhMYoc9V1WJRIutU8TE-qhqpVFtyiTVcWVIeWa_zvMIztnUPgjoUyEAVxi1gqOtX1fwpqM3plU7VelUqSywMymjGS7IN96za7ayq9ZDXUpYqwSpRe8vOT6udRmHVlEnsxbhCAQ=s256-no?authuser=0",
        "https://lh3.googleusercontent.com/zwOgNJzafuGRudkFrfmld_VXNCvX5cNWwqGCkBKHiIn0lfjZaXse5gLYUM9yJxK3xAytUtB5OoEgGSHdn5netW1Iek-OIv-X00ai8SzbRAGFYh0hac9C8vg4_hn12p0GlB0cQyLlHfrRc627SzcNiTIoUdtbxdmyIm9NDIaE_Gi4i2BoYBylz_8SKaltJnHwYEQFvZ6XDFeYFbeTwumxNcfRjlfN47LQ-SNm1qE79SfnzQUVDJbFLtMaaeemnJiBZzc-GT2WKm8GhLlQEwldKiBP1gNm-BlYwQ31a3Hs0gsy4_FWboL4LawJc4gF16DLSsP2RiDEzee0wCWbesHNGMTp5AQEn4lLYIavUwvCQehFmaR5OpINaTpW4c731e7GRdJHwlDgcoo1QEUXX7ztz9obZFTg1FqUGOGo5UcDi5Iiszjjj-EnOlvGuyXk2xEEb1ZqAg2omrwXfloolsnTDDrH8DZcl07eTIq7nXlFMSIgC6ZwkCy3b3tJzffol4DE6hna-_Oj28Sr8uzLvhF4Pku0sFOEAdkBf73tZXDnaag9CmFFGjcIZycAm2IpWBpwSu-jVjvkIR-MJNuZDIWFGR_XS4LmY6EWzvV9Klf_RsyNucaO8Rw-h1GC2D-P7UDXAahrSoiRR2joMHs3FHe4hbJ4E_gUhSJ9-uqpKrfGLYZhjT2lDRNQ6OkM_SCi8AWtIlEV-4NSRbooa9jLTvwZa3A=s553-no?authuser=0",
        "https://lh3.googleusercontent.com/cjxLM-e3JfCkNOv1izNN9Ab9gtI7KeXl2nivm8ZUczwzi9BiDg-bKpuUFnYEC4QRh-0wKMRiY4PlaDSRU0tlsMF1VqO9PDIIJvMIMcM_0SBkxPpYCXz2vJcG8Jgwri6QiebMBDe8UPkj7cShaLy07jPzeorJj7YntOlSxYbX-g3_sEPaV5bLX-spS8zm9wsBwrF47XbZQiGAYXt8miHI1RwJ2jKuEE9A3UG0VyyErXunmPHyyJcXeQu1b_3YTUmFm6wE0NNaAd-VENUUxykgm9UZu3UU6r5iH5CMwSoY2XSfR5Pjpp10g-ZkPpdHwai3ttw6NEuq4QXgTeQW_xmfyEP5VKdTxFVk_LocNpiOUm8m5mLBQKgahsa_uD3xlrIiHg-y9WBA1gAdpvpSAfL6TRDnXDvqoWv3EWIy9bTg4TefpXc02OnLoWIOiX55ITwQgHy_oVCPh0-S5AWr2VqaxxBGkziYJhhLwsGKUEp5iK8ulqVjIHKaFxfQ_sqzAnqO-25iiUlQR33SlZVP2vkMZCfaHPrXBGg7JPLtFnZ_U1fVoeUFd_fe6kTMPgeaFpplRWbeclkCKhokWKD8XoDbxecUCnpxixqpnH3uZEnUgZwYbB-hqCsCtM21FF5joJp9Y2tNcW28NzDu8x_AWLvpQboNSxMk_QCGIlYM3JWFAZgCvlmDh6aSF11lFeI75rSFrBwEPxNn7YP58q83h19yITw=s540-no?authuser=0",
        "https://lh3.googleusercontent.com/CtNaWabKayWWxyW49HzJFMbPlguTp41w76Sio9RljK-uoNmaUw2f13yBB9rBNDdg10y_sxDMfVPOmNDcbMgPWFTL9zrvrylQt9Jow2X29lmIFqZkQQQ8DgzEf6YshCAEpL92HBkcXZzBQ6maKtkRT2obJSJciQz6p8ApxZ3n94-3WZ3kn7-oItk79n-6Z5DE95xB0Ce-hQuJuvpO2Lp8aEorcZSkdC5Kz36GacCWNY3qQYrtqtv47WsgtTV6kqH3XSJAeHmZ5C97LLv9-XjcRd6ZwDqXSX0ebg4zDZ56Ku_RE-dzvdHXhYR56FmqUHZHbB4eSjXfoftnLiweShe2gTrt01zdb2_6yvu7l5eYcql9np8P7Ab_VfAtIgDnqSTY9tPYEjI7KT2iAr0FGRePetrn5gL6CTEzOGrnUiRcWPDR6hP0y1Ur6KACr7P3GGtnGdJaeAbYqQuPVWFjlfzkR47Xm0SkSZbPzMNo6-inSci41hPuwhtrZ4Ul3PwShVN2P8p3FodTCMds0zyZiYZsZ0bFlcvUFWiRvo5_qiIazC68VwTHJNE7ocWSy4PrGylyrdtdPyG734afyusDJE3v9E0JUptOAfscHPvpDWT6QmtexTp6H5JTvrfPEjDyJI4ZnM2_XrTvlJZB3EiwHeaxZIQ9oGg_h5hVPlnk5fNCxPSaDCMmxml9mCM2r03c5SxDzKXBZ3Psrth4qelwWdemB3I=s250-no?authuser=0",
        "https://lh3.googleusercontent.com/Rz63LNKzQXBmUW89fmDX5urorPE01k6z0zC_yl1mt_viaBsShlRyy2bUXbazXxKOIh3LwVJ7yVEqkeJVbNkDJLnlmNW-mHLWhPQzNgmdLt01CiBpPYO_2WdjOzX6uvQjZneiJkbiP6AIdz1mLPdVlUt46aszFQfI46eBi2-763wICp-sQ-N5oqHBk-X8l8wUAql8I_sTsZnEu2awLBJ2bBNQeE-5Vc9jOo9HTaNC9N-t-TX5pcVrG6vEbjMd5_hel3h_q9TS3nB4LQZxCd8RWP701xUbGNVfq7kgaALRq0hSmSpdSZjDVc89WIKMn8at8z0va6IzhVHUrgCBHqKSNhwdop7oN8OBiH1nfHTS8P_xQAS3rDd4agyefootxtZImhSMpTF113IuOCs2NcDkxZthPqTCzjOcJv_79Kzc-plUtuLhb_lgIVTPP7HkBc9h9S0IBOvbSdImv0aXUIOdl5lhjTkJF53BubK6HBdLpxNl8uNuKPfxX7wC8H9R2ivRiyhyDexzrWOeoWL4U4wj7kioFd6dOlvhUtYts--YA8_Ct0bHtdodEsCtsweC2HiYK8VnCchohUK3j4Tw1srqV7Pd9vRZgvqAdKW9Jtj3S4EkgIgiBKveEz4OdLBkLkgQOJFzHwXAymm0iOJA7kAY05tggEFXS_inwM5MW7iSu9f366lM-rtqYhnk7wRkpaeiXTDt-qMuFq3-H1Y3WxXT4_4=s256-no?authuser=0",
        "https://lh3.googleusercontent.com/U8OrFeZTTQleSA_fHrsEEReYFVtdB48zHq7YSpLbt6MDiQyZOlUuooe55q0A7GPbcVnSItHA4DPUugw0fqsEO2VPUzSlyICv9YuNrrLMXqQK5tYZknKV3cRGFs0KR0kC5VtFIZChlxaVFhTjANWJR1PX29uMs9YIxZnEd1_NGndEANXhR8Y0NOKzoBrpDAZQ86y6yG5rse67emkLZ_vaBffFkN8gpdnCmHYNcEi1Rq0WYzRgXxVZfYTesvXyu5kr4D_UzRoyFYZpkBIK6ZHgU6qNFmeWw3shh2MYddDxVWeg4AAY3NgmGBfgHkbUB3cy7AV853JrFdQEYvw-tpcB1KyPoRUPlyeknkyph9Og295OKd3bnUSKwseTgyCUGHgk_5BOH7LIlse-VmfZdGAps_gF0MDGJpk9XDQF16mjup0BzRiJrr2cTBle0Er_PNPj8_jVRffMuDPAWrinAPUj83hLvUaBFhBgE1vRCed9F3yuKuysikMG_xKlRcZ3Wnd8S_xnzt4NAMxJiOV4M-C4bT9ZP1eAxNtcbmhQrbE4e1HyNih0eXiMrgeoLeOhlwc4tXpqimDogGQScYeXPOv2PkbgZr0dKUGnGB3XwxAzON_R_qL_LteMiDX2rmi1Xciw-s-UfZP4UO9hsEw8qbmnat33wP71qQ9iN-dLT2xfV9pbqpxOJZE1oj_BfoQ8Fe7oBwmSkGwCrUX0NkdnqMSRr5U=s553-no?authuser=0",
        "https://lh3.googleusercontent.com/jNf3uoJDFggqMw_Z3PMNGtB3IzlH1r5Q2OR60hQEdOt7-gROR-ELdZGm1xaxFcHUdXV4q_QsjDi7RnaYYsxnHvsCt5vNt6ESUTxIYZHyORySVIThzRJK-gnalHpZVQx9Yanut1BWxbLjMZqk_4QWolbh2iIIMsNZKrffStOn21PzuFam8Rj2CtV2EW-T3ZevWTUDfenCssPMvS4b92nvIsqYDv2nTgkwI9LnyLypFRo37SuKteJBfXx05LnBOgoz92-SFSyvNm4aIcqdA9R5uqcgm9FtaD2OTqX2BB2EBbtkIdrzxrfFEIx9DScc3aq_H71q8qkhDnU-nyA0grn4blIeX6VjmAyOC_sMd_g6Lg3EGOowpE7HKhwqcI5V2zjVf3Jw9ObTp9rih1EfzOSXmkslHhqxifqW01cY7VqSFmx1BB-4oeklxiIPEPTGr6eGf4mMw6sVJ0ZlWh_uJ_ZMZM2fARWs6wFI__GStCL3wbm32NBMHHbtPkHueAjCcwjTNinMQQU8T_drDued5ZNs0VQFIiHxKpfOT36njnrTd2N9fvv9LaNZwI5fR_xaUfiCOA4WHHXq2ZOlRlfPUgU4pOZ5KLqe8_TW_pzuK_c-5qaJ1_764wN9e98Ehq831QBESgLglqM_Rn0EaDGY7x77WOgwfRo5URDKOwy_x3jm4YAugpb1mPQf7Uo32dvA9p8L1cLDXjP5bojR2x-9PIonPac=s236-no?authuser=0",
        "https://lh3.googleusercontent.com/NynwzY2kzS-SyOGFGpK2nSNkVa5rMwL9vYQ4DvHpJj5EGnehUjxqlC1B8rNf7agfjiqH-hlFkmgNZ8HUnbzEthgFGjLSxAWH71E9gJ6L-uLMWylEnmVIugW8JDiqDtM4vYGw6NjIk5yRDfwph9UV1KLVMkOHNTLYb6uu0BD0I2WwRXaUrd-HTr0b1AamNAr0APyHbS0HDR93eeP2QoyOqcuL_4GOgZ-i1SlxgXv31mzYr7byyLEjopwa32GhqKVX7m6nyoh7wIb53kyLrlUylx5IGntLZh1R80yGWxYvSBqjfcdjDIxa2FsqjvlwbTIH6ohYDbe5tzVr74oTL0gs_U1QC5-88DSSfnK99kGTU3-TtJ6wlFSuH0Zb2QvT7Ni5WLmIQIjU2DiZySxiaYA3ydVmDgIjiEjBh2pE7ImdUjJ0VmgiiwJz7kF4hykz1EuFceok-ZkFPHu0yffQwCQ9-1OlZJlhG_BWleZmFDe_tFCHawE1a-7JYetcI2DKFjGnLWoBRWCiymgQIb-poIFTZL1gDs8vn4aBo_vmk2Wc_6747aWRrva0O676MP0kAYQ9PngrGhksC9J6QiLzpHamgGVJo-UvTX2cTH8wDsmWqGmrV0KeX32obW3XnllD1OXx4jnzatVf7_KzHN5vvutt9b1Zrk6TKyE5CLM28dOgy5GrlQ_jKSH2CCiZgttNnZryEF4Aut51ifRfyv20mgHTgrE=s300-no?authuser=0",
        "https://lh3.googleusercontent.com/oeeyapeWUVB_VIIqgfPZ-tEHJJs8cdejTucXOWC9xk50UIx_vYYG6NMp_hbALmOqWsNUNgHVtqa--v0QVHJLIc-G8UDmepDGc6szM1irAdO-7cwIyhlXdjGnT-4wMgoZ8NV0tFbG6hcga-xYzJ4qfiImgLubRIFF7-Zosct3zlsQsvxh_tosVmvVCWllvC09eFeRCniURDAm_KVXXxveZzSeTCK8fJGMib6ErnDHWkss5t2y7YitXzNFBGeBGCYZK5-zSzCKSzwB7SwBV5Ds0hZyeLA0SlyR9dhu-UnoPaX7F-gBBbgnuPJi4m1EIuONyJh7upoJ35oKr-jSBZ92y-LmPd63pJYHnnETmGC0hUaZHUSKAPZAhecbgKi_eIB0tVkesYoiq_c5P20Am_raMQmgN9LJKnZtdRY4u1E3xa_5m3gFaFKRzcc35EOqXqsb9Gx3FKemyWmZOdEeBk0sgYlKRGnshMrC4rYPfaGGI61z4LTL2HDnVi0Uftzr7NmPQ394sFmh-7sZljHmcAWtrrqSomjTdEW9CWlBSptQwDdjiDpNGLOffTrR2oXGnqWpb7cp3g5YmAdU2cYTNzZ1TEbUhHSULIe5CyeIOalUDsxJJ_Ysy_17NuStD2jwQ-XaVWv4CXzZTsenq2pRM-QHTV3Zyb2w_eRjkpHNCt9QhzHIRhP6FUSUmrO2GOCf_gETsu7IwH6HXBZmg4JyNO-83Bc=s400-no?authuser=0",
    ];

    const sample = (array) => {
        return array[Math.floor (Math.random() * array.length)];
    };

    // console.log(sample(iconLinks));

    return (
        <div style={styles.center}>
            <h1>Champions of the Multiverse</h1>
            <h3>Choose your hero:</h3>
            {renderChamps()}
            <div style={styles.containerNew}>
                <Link to="/champs/new" style={{textDecoration: "none", color: "black"}}>Add a Hero from your World</Link>
            </div>
        </div>
    )
};

const styles = {
    container: {
        backgroundColor: "blue",
        margin: "20px",
        padding: "10px",
        width: "700px",
        maxWidth: "700px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    containerNew: {
        backgroundColor: "gold",
        margin: "20px",
        padding: "10px",
        width: "500px",
        maxWidth: "500px",
        // display: "flex",
        // justifyContent: "space-evenly",
        // alignItems: "center",
    },
    link: {
        textDecoration: "none",
        color: "gold",
        margin: "1em"
    },
    center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    }
}

export default Champs;