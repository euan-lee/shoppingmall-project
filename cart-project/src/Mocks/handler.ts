import { http, HttpResponse } from "msw";
import { URLS } from "../Const/url";

export const handlers = [
  http.get(
    import.meta.env.VITE_LOCAL_DEV + "/products",
    async ({ request }) => {
      const url = new URL(request.url);
      const page = url.searchParams.get("page")
        ? url.searchParams.get("page")
        : 1;

      const pageSize = Number(url.searchParams.get("limit"))
        ? url.searchParams.get("limit")
        : 16;

      const products = [
        {
          id: 1,
          name: "냉면용기(대)",
          price: 83700,
          imageUrl: "https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg",
        },
        {
          id: 2,
          name: "생새우살 (71/90) 500g 4개",
          price: 29000,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/6b95c66a-c13d-4ccd-9df5-b1af1428a225.jpg",
        },
        {
          id: 3,
          name: "펩시 콜라 355ml 24캔",
          price: 83700,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/84fc0238-0239-4d0e-870b-a9daa6f2c42c.jpg",
        },
        {
          id: 4,
          name: "리치스 스위트콘 대 2.95kg",
          price: 4780,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/ff297e50-7d6b-4a87-8509-b387442ff877.jpg",
        },
        {
          id: 5,
          name: "하늘푸드 스위트고로케 1kg",
          price: 5200,
          imageUrl: "https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg",
        },
        {
          id: 6,
          name: "야채고로케 (60g*18입) 1080g",
          price: 11170,
          imageUrl:
            "https://cdn-mart.baemin.com/goods/custom/20200427/9751-main-01.png",
        },
        {
          id: 7,
          name: "식자재왕 김말이튀김 야채맛 1kg",
          price: 6580,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/bulk/20211210-155432/9416-main-01.jpg",
        },
        {
          id: 8,
          name: "삼양 야채튀김 (60g*50±1/박스) 3kg",
          price: 24610,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/8916edff-9fa9-4538-95c3-13d463f58a86.jpg",
        },
        {
          id: 9,
          name: "미미사 분모자 (17mm) 250G",
          price: 1440,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/6ae4c431-6988-41ab-8894-7df7ee7b7cb3.jpg",
        },
        {
          id: 10,
          name: "손수 맛있는 쌀떡볶이떡 1kg",
          price: 2200,
          imageUrl: "https://cdn-mart.baemin.com/goods/21/10221-main-01.jpg",
        },
        {
          id: 11,
          name: "젓가락(종이)-웬만해선 이 맛을 막을 수 없다",
          price: 21800,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/1b6e926b-52a3-4a92-8db5-fddaccdb2583.jpg",
        },
        {
          id: 12,
          name: "[리뉴얼]젓가락(종이)-정성을 담아",
          price: 21800,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/5297837f-5ecd-4945-be2f-4a75854cd06e.jpg",
        },
        {
          id: 13,
          name: "냉면용기(대)",
          price: 83700,
          imageUrl: "https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg",
        },
        {
          id: 14,
          name: "생새우살 (71/90) 500g 4개",
          price: 29000,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/6b95c66a-c13d-4ccd-9df5-b1af1428a225.jpg",
        },
        {
          id: 15,
          name: "펩시 콜라 355ml 24캔",
          price: 83700,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/84fc0238-0239-4d0e-870b-a9daa6f2c42c.jpg",
        },
        {
          id: 16,
          name: "리치스 스위트콘 대 2.95kg",
          price: 4780,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/ff297e50-7d6b-4a87-8509-b387442ff877.jpg",
        },
        {
          id: 17,
          name: "하늘푸드 스위트고로케 1kg",
          price: 5200,
          imageUrl: "https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg",
        },
        {
          id: 18,
          name: "야채고로케 (60g*18입) 1080g",
          price: 11170,
          imageUrl:
            "https://cdn-mart.baemin.com/goods/custom/20200427/9751-main-01.png",
        },
        {
          id: 19,
          name: "식자재왕 김말이튀김 야채맛 1kg",
          price: 6580,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/bulk/20211210-155432/9416-main-01.jpg",
        },
        {
          id: 20,
          name: "삼양 야채튀김 (60g*50±1/박스) 3kg",
          price: 24610,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/8916edff-9fa9-4538-95c3-13d463f58a86.jpg",
        },
        {
          id: 21,
          name: "미미사 분모자 (17mm) 250G",
          price: 1440,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/6ae4c431-6988-41ab-8894-7df7ee7b7cb3.jpg",
        },
        {
          id: 22,
          name: "손수 맛있는 쌀떡볶이떡 1kg",
          price: 2200,
          imageUrl: "https://cdn-mart.baemin.com/goods/21/10221-main-01.jpg",
        },
        {
          id: 23,
          name: "젓가락(종이)-웬만해선 이 맛을 막을 수 없다",
          price: 21800,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/1b6e926b-52a3-4a92-8db5-fddaccdb2583.jpg",
        },
        {
          id: 24,
          name: "[리뉴얼]젓가락(종이)-정성을 담아",
          price: 21800,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/5297837f-5ecd-4945-be2f-4a75854cd06e.jpg",
        },
        {
          id: 25,
          name: "펩시 콜라 355ml 24캔",
          price: 83700,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/84fc0238-0239-4d0e-870b-a9daa6f2c42c.jpg",
        },
        {
          id: 26,
          name: "리치스 스위트콘 대 2.95kg",
          price: 4780,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/ff297e50-7d6b-4a87-8509-b387442ff877.jpg",
        },
        {
          id: 27,
          name: "하늘푸드 스위트고로케 1kg",
          price: 5200,
          imageUrl: "https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg",
        },
        {
          id: 28,
          name: "야채고로케 (60g*18입) 1080g",
          price: 11170,
          imageUrl:
            "https://cdn-mart.baemin.com/goods/custom/20200427/9751-main-01.png",
        },
        {
          id: 29,
          name: "식자재왕 김말이튀김 야채맛 1kg",
          price: 6580,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/bulk/20211210-155432/9416-main-01.jpg",
        },
        {
          id: 30,
          name: "삼양 야채튀김 (60g*50±1/박스) 3kg",
          price: 24610,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/8916edff-9fa9-4538-95c3-13d463f58a86.jpg",
        },
        {
          id: 31,
          name: "미미사 분모자 (17mm) 250G",
          price: 1440,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/6ae4c431-6988-41ab-8894-7df7ee7b7cb3.jpg",
        },
        {
          id: 32,
          name: "손수 맛있는 쌀떡볶이떡 1kg",
          price: 2200,
          imageUrl: "https://cdn-mart.baemin.com/goods/21/10221-main-01.jpg",
        },
        {
          id: 33,
          name: "젓가락(종이)-웬만해선 이 맛을 막을 수 없다",
          price: 21800,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/1b6e926b-52a3-4a92-8db5-fddaccdb2583.jpg",
        },
        {
          id: 34,
          name: "[리뉴얼]젓가락(종이)-정성을 담아",
          price: 21800,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/5297837f-5ecd-4945-be2f-4a75854cd06e.jpg",
        },
        {
          id: 35,
          name: "펩시 콜라 355ml 24캔",
          price: 83700,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/84fc0238-0239-4d0e-870b-a9daa6f2c42c.jpg",
        },
        {
          id: 36,
          name: "리치스 스위트콘 대 2.95kg",
          price: 4780,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/ff297e50-7d6b-4a87-8509-b387442ff877.jpg",
        },
        {
          id: 37,
          name: "하늘푸드 스위트고로케 1kg",
          price: 5200,
          imageUrl: "https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg",
        },
        {
          id: 38,
          name: "야채고로케 (60g*18입) 1080g",
          price: 11170,
          imageUrl:
            "https://cdn-mart.baemin.com/goods/custom/20200427/9751-main-01.png",
        },
        {
          id: 39,
          name: "식자재왕 김말이튀김 야채맛 1kg",
          price: 6580,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/bulk/20211210-155432/9416-main-01.jpg",
        },
        {
          id: 40,
          name: "삼양 야채튀김 (60g*50±1/박스) 3kg",
          price: 24610,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/8916edff-9fa9-4538-95c3-13d463f58a86.jpg",
        },
      ];

      const startIndex = Number(page) * Number(pageSize);
      const endIndex = startIndex + Number(pageSize);

      const paginatedProducts = products.slice(startIndex, endIndex);
      return HttpResponse.json(paginatedProducts);
    }
  ),

  http.get(import.meta.env.VITE_LOCAL_DEV + URLS.getProduct("1"), async () => {
    return HttpResponse.json({
      id: 1,
      name: "냉면용기(대)",
      price: 83700,
      imageUrl: "https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg",
    });
  }),

  http.get(import.meta.env.VITE_LOCAL_DEV + URLS.getProduct("2"), async () => {
    return HttpResponse.json({
      id: 2,
      name: "생새우살 (71/90) 500g 4개",
      price: 29000,
      imageUrl:
        "https://cdn-mart.baemin.com/sellergoods/main/6b95c66a-c13d-4ccd-9df5-b1af1428a225.jpg",
    });
  }),

  http.get(import.meta.env.VITE_LOCAL_DEV + URLS.getProduct("3"), async () => {
    return HttpResponse.json({
      id: 3,
      name: "생새우살 (71/90) 500g 4개",
      price: 29000,
      imageUrl:
        "https://cdn-mart.baemin.com/sellergoods/main/6b95c66a-c13d-4ccd-9df5-b1af1428a225.jpg",
    });
  }),

  http.get(import.meta.env.VITE_LOCAL_DEV + URLS.getProduct("4"), async () => {
    return HttpResponse.json({
      id: 4,
      name: "생새우살 (71/90) 500g 4개",
      price: 29000,
      imageUrl:
        "https://cdn-mart.baemin.com/sellergoods/main/6b95c66a-c13d-4ccd-9df5-b1af1428a225.jpg",
    });
  }),

  http.get(import.meta.env.VITE_LOCAL_DEV + URLS.getProduct("5"), async () => {
    return HttpResponse.json({
      id: 5,
      name: "생새우살 (71/90) 500g 4개",
      price: 29000,
      imageUrl:
        "https://cdn-mart.baemin.com/sellergoods/main/6b95c66a-c13d-4ccd-9df5-b1af1428a225.jpg",
    });
  }),

  http.get(import.meta.env.VITE_LOCAL_DEV + URLS.getProduct("6"), async () => {
    return HttpResponse.json({
      id: 6,
      name: "생새우살 (71/90) 500g 4개",
      price: 29000,
      imageUrl:
        "https://cdn-mart.baemin.com/sellergoods/main/6b95c66a-c13d-4ccd-9df5-b1af1428a225.jpg",
    });
  }),

  http.get(import.meta.env.VITE_LOCAL_DEV + URLS.getProduct("7"), async () => {
    return HttpResponse.json({
      id: 7,
      name: "생새우살 (71/90) 500g 4개",
      price: 29000,
      imageUrl:
        "https://cdn-mart.baemin.com/sellergoods/main/6b95c66a-c13d-4ccd-9df5-b1af1428a225.jpg",
    });
  }),

  http.get(import.meta.env.VITE_LOCAL_DEV + URLS.getProduct("8"), async () => {
    return HttpResponse.json({
      id: 10,
      name: "생새우살 (71/90) 500g 4개",
      price: 29000,
      imageUrl:
        "https://cdn-mart.baemin.com/sellergoods/main/6b95c66a-c13d-4ccd-9df5-b1af1428a225.jpg",
    });
  }),

  http.get(import.meta.env.VITE_LOCAL_DEV + URLS.getProduct("9"), async () => {
    return HttpResponse.json({
      id: 9,
      name: "생새우살 (71/90) 500g 4개",
      price: 29000,
      imageUrl:
        "https://cdn-mart.baemin.com/sellergoods/main/6b95c66a-c13d-4ccd-9df5-b1af1428a225.jpg",
    });
  }),

  http.get(import.meta.env.VITE_LOCAL_DEV + URLS.getProduct("10"), async () => {
    return HttpResponse.json({
      id: 8,
      name: "생새우살 (71/90) 500g 4개",
      price: 29000,
      imageUrl:
        "https://cdn-mart.baemin.com/sellergoods/main/6b95c66a-c13d-4ccd-9df5-b1af1428a225.jpg",
    });
  }),

  http.get(import.meta.env.VITE_LOCAL_DEV + URLS.getCarts(), async () => {
    return HttpResponse.json([
      {
        carts: [
          {
            id: 1,
            product: {
              name: "[리뉴얼]젓가락(종이)-정성을 담아",
              price: 21800,
              imageUrl:
                "https://cdn-mart.baemin.com/sellergoods/main/5297837f-5ecd-4945-be2f-4a75854cd06e.jpg",
            },
            done: false,
            quantity: 1,
          },
          {
            product: {
              name: "젓가락(종이)-웬만해선 이 맛을 막을 수 없다",
              price: 21800,
              imageUrl:
                "https://cdn-mart.baemin.com/sellergoods/main/1b6e926b-52a3-4a92-8db5-fddaccdb2583.jpg",
            },
            id: 2,
            done: false,
            quantity: 1,
          },
          {
            id: 1675351764224,
            product: {
              id: 4,
              name: "리치스 스위트콘 대 2.95kg",
              price: 4780,
              imageUrl:
                "https://cdn-mart.baemin.com/sellergoods/main/ff297e50-7d6b-4a87-8509-b387442ff877.jpg",
            },
            done: false,
            quantity: 1,
          },
          {
            id: 1675351772608,
            done: false,
            quantity: 1,
            product: {
              id: 4,
              name: "리치스 스위트콘 대 2.95kg",
              price: 4780,
              imageUrl:
                "https://cdn-mart.baemin.com/sellergoods/main/ff297e50-7d6b-4a87-8509-b387442ff877.jpg",
            },
          },
          {
            id: 1675351774776,
            done: false,
            quantity: 1,
            product: {
              done: false,
              quantity: 1,
              id: 4,
              name: "리치스 스위트콘 대 2.95kg",
              price: 4780,
              imageUrl:
                "https://cdn-mart.baemin.com/sellergoods/main/ff297e50-7d6b-4a87-8509-b387442ff877.jpg",
            },
          },
          {
            id: 1675351775632,
            done: false,
            quantity: 1,
            product: {
              id: 4,
              name: "리치스 스위트콘 대 2.95kg",
              price: 4780,
              imageUrl:
                "https://cdn-mart.baemin.com/sellergoods/main/ff297e50-7d6b-4a87-8509-b387442ff877.jpg",
            },
          },
          {
            id: 1675351776006,
            done: false,
            quantity: 1,
            product: {
              id: 4,
              name: "리치스 스위트콘 대 2.95kg",
              price: 4780,
              imageUrl:
                "https://cdn-mart.baemin.com/sellergoods/main/ff297e50-7d6b-4a87-8509-b387442ff877.jpg",
            },
          },
          {
            id: 1675351781321,
            done: false,
            quantity: 1,
            product: {
              id: 3,
              name: "펩시 콜라 355ml 24캔",
              price: 83700,
              imageUrl:
                "https://cdn-mart.baemin.com/sellergoods/main/84fc0238-0239-4d0e-870b-a9daa6f2c42c.jpg",
            },
          },
          {
            id: 1675351804540,
            done: false,
            quantity: 1,
            product: {
              id: 12,
              name: "[리뉴얼]젓가락(종이)-정성을 담아",
              price: 21800,
              imageUrl:
                "https://cdn-mart.baemin.com/sellergoods/main/5297837f-5ecd-4945-be2f-4a75854cd06e.jpg",
            },
          },
        ],
      },
    ]);
  }),

  http.post(
    import.meta.env.VITE_LOCAL_DEV + URLS.postresetCartsDone(),
    async () => {
      return HttpResponse.json({ status: 201 });
    }
  ),
  http.post(
    import.meta.env.VITE_LOCAL_DEV + URLS.postCartsItemCheck("1"),
    async () => {
      return HttpResponse.json({ status: 201 });
    }
  ),
  http.post(
    import.meta.env.VITE_LOCAL_DEV + URLS.postCartsItemCheck("2"),
    async () => {
      return HttpResponse.json({ status: 201 });
    }
  ),
  http.post(
    import.meta.env.VITE_LOCAL_DEV + URLS.postCartsItemCheck("3"),
    async () => {
      return HttpResponse.json({ status: 201 });
    }
  ),
  http.post(
    import.meta.env.VITE_LOCAL_DEV + URLS.postCartsItemCheck("4"),
    async () => {
      return HttpResponse.json({ status: 201 });
    }
  ),
  http.post(
    import.meta.env.VITE_LOCAL_DEV + URLS.postCartsItemCheck("5"),
    async () => {
      return HttpResponse.json({ status: 201 });
    }
  ),

  http.delete(
    import.meta.env.VITE_LOCAL_DEV + URLS.deleteCartsItem("1"),
    async (request) => {
      console.log(request, "cart 아이템 삭제");
      return HttpResponse.json({ status: 201 });
    }
  ),

  http.delete(
    import.meta.env.VITE_LOCAL_DEV + URLS.deleteCartsItem("2"),
    async (request) => {
      console.log(request, "cart 아이템 삭제");
      return HttpResponse.json({ status: 201 });
    }
  ),
  http.delete(
    import.meta.env.VITE_LOCAL_DEV + URLS.deleteCartsItem("3"),
    async (request) => {
      console.log(request, "cart 아이템 삭제");
      return HttpResponse.json({ status: 201 });
    }
  ),
  http.delete(
    import.meta.env.VITE_LOCAL_DEV + URLS.deleteCartsItem("4"),
    async (request) => {
      console.log(request, "cart 아이템 삭제");
      return HttpResponse.json({ status: 201 });
    }
  ),
  http.delete(
    import.meta.env.VITE_LOCAL_DEV + URLS.deleteCartsItem("5"),
    async (request) => {
      console.log(request, "cart 아이템 삭제");
      return HttpResponse.json({ status: 201 });
    }
  ),
  http.post(
    import.meta.env.VITE_LOCAL_DEV + URLS.postCartsItemNumber("1"),
    async () => {
      return HttpResponse.json({ status: 201 });
    }
  ),

  http.post(
    import.meta.env.VITE_LOCAL_DEV + URLS.postCartsItemNumber("2"),
    async () => {
      return HttpResponse.json({ status: 201 });
    }
  ),

  http.post(
    import.meta.env.VITE_LOCAL_DEV + URLS.postCartsItemNumber("3"),
    async () => {
      return HttpResponse.json({ status: 201 });
    }
  ),
  http.post(
    import.meta.env.VITE_LOCAL_DEV + URLS.postCartsItemNumber("4"),
    async () => {
      return HttpResponse.json({ status: 201 });
    }
  ),

  http.post(
    import.meta.env.VITE_LOCAL_DEV + URLS.postCartsItemNumber("5"),
    async () => {
      return HttpResponse.json({ status: 201 });
    }
  ),
  http.post(
    import.meta.env.VITE_LOCAL_DEV + URLS.postdecreaseCartsItemNumber("1"),
    async () => {
      return HttpResponse.json({ status: 201 });
    }
  ),
  http.post(
    import.meta.env.VITE_LOCAL_DEV + URLS.postdecreaseCartsItemNumber("2"),
    async () => {
      return HttpResponse.json({ status: 201 });
    }
  ),
  http.post(
    import.meta.env.VITE_LOCAL_DEV + URLS.postdecreaseCartsItemNumber("3"),
    async () => {
      return HttpResponse.json({ status: 201 });
    }
  ),
  http.post(
    import.meta.env.VITE_LOCAL_DEV + URLS.postdecreaseCartsItemNumber("4"),
    async () => {
      return HttpResponse.json({ status: 201 });
    }
  ),
  http.post(
    import.meta.env.VITE_LOCAL_DEV + URLS.postdecreaseCartsItemNumber("5"),
    async () => {
      return HttpResponse.json({ status: 201 });
    }
  ),

  http.delete(
    import.meta.env.VITE_LOCAL_DEV + URLS.deleteAllCartsItems(),
    async () => {
      return HttpResponse.json({ status: 201 });
    }
  ),

  http.post(
    import.meta.env.VITE_LOCAL_DEV + URLS.postComfirmOrderCartsItems(),
    async () => {
      return HttpResponse.json({ status: 201 });
    }
  ),

  http.post(import.meta.env.VITE_LOCAL_DEV + URLS.postPayment(), async () => {
    console.log("??");
    return HttpResponse.json({ status: 201 });
  }),

  http.post(import.meta.env.VITE_LOCAL_DEV + URLS.postCarts("1"), async () => {
    console.log("??");
    return HttpResponse.json({ status: 201 });
  }),
  http.get(import.meta.env.VITE_LOCAL_DEV + URLS.getOrders(), async () => {
    return HttpResponse.json({
      orders: [
        {
          id: 1,
          orderDetails: [
            {
              id: 1,
              name: "[리뉴얼]젓가락(종이)-정성을 담아",
              price: 21800,
              imageUrl:
                "https://cdn-mart.baemin.com/sellergoods/main/5297837f-5ecd-4945-be2f-4a75854cd06e.jpg",
              quantity: 5,
            },
            {
              id: 2,
              name: "젓가락(종이)-웬만해선 이 맛을 막을 수 없다",
              price: 21800,
              imageUrl:
                "https://cdn-mart.baemin.com/sellergoods/main/1b6e926b-52a3-4a92-8db5-fddaccdb2583.jpg",
              quantity: 3,
            },
          ],
        },
        {
          id: 2,
          orderDetails: [
            {
              id: 40,
              name: "삼양 야채튀김 (60g*50±1/박스) 3kg",
              price: 24610,
              imageUrl:
                "https://cdn-mart.baemin.com/sellergoods/main/8916edff-9fa9-4538-95c3-13d463f58a86.jpg",
              quantity: 5,
            },
            {
              id: 39,
              name: "식자재왕 김말이튀김 야채맛 1kg",
              price: 6580,
              imageUrl:
                "https://cdn-mart.baemin.com/sellergoods/bulk/20211210-155432/9416-main-01.jpg",
              quantity: 3,
            },
          ],
        },
      ],
    });
  }),

  http.post(import.meta.env.VITE_LOCAL_DEV + URLS.postOrders(), async () => {
    return HttpResponse.json({ status: 201 });
  }),

  http.get(import.meta.env.VITE_LOCAL_DEV + URLS.getOrder("1"), async () => {
    return HttpResponse.json({
      orderId: 1,
      orders: [
        {
          id: 3,
          name: "펩시 콜라 355ml 24캔",
          price: 83700,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/84fc0238-0239-4d0e-870b-a9daa6f2c42c.jpg",
          quantity: 3,
        },
        {
          id: 2,
          price: 20000,
          name: "피자",
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/84fc0238-0239-4d0e-870b-a9daa6f2c42c.jpg",
          quantity: 3,
        },
      ],
    });
  }),

  http.post(import.meta.env.VITE_LOCAL_DEV + "/products", async () => {
    console.log('Captured a "POST /posts" request');
  }),
];
