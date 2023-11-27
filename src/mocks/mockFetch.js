const breedsListResponse = {
    message: {
        boxer: [],
        cattledog: [],
        dalmatian: [],
        husky: [],
    },
};

const randomDogInfoResponse = {
    message: {
        name: "Buddy",
        age: 3,
        temperament: "Friendly",
    },
};

const responseFacts = {
    data: [
        {
            id: "db94e53e-96a9-4ba9-8d1f-80b04fd434d7",
            type: "fact",
            attributes: {
                body: "The Border Collie, Poodle and Golden Retriever are considered the world's smartest dog breeds."
            }
        }
    ]
};

const dogImagesResponse = {
    message: [
        "https://images.dog.ceo/breeds/cattledog-australian/IMG_1042.jpg ",
        "https://images.dog.ceo/breeds/cattledog-australian/IMG_5177.jpg",
    ],
};

export default async function mockFetch(url) {
    switch (url) {
        case "https://dog.ceo/api/breeds/list/all": {
            return {
                ok: true,
                status: 200,
                json: async () => breedsListResponse,
            };
        }
        case "https://dog.ceo/api/breed/husky/images":
        case "https://dog.ceo/api/breed/cattledog/images": {
            return {
                ok: true,
                status: 200,
                json: async () => dogImagesResponse,
            };
        }
        case "https://dog.ceo/api/breeds/random/info": {
            return {
                ok: true,
                status: 200,
                json: async () => randomDogInfoResponse,
            };
        }
        case "https://dogapi.dog/api/v2/facts": {
            return {
                ok: true,
                status: 200,
                json: async () => responseFacts,
            };
        }
        default: {
            throw new Error(`Unhandled request: ${url}`);
        }
    }
}