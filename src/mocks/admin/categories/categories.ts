export interface CategoryColumn {
    id: string;
    code: number;
    name: string;
    updatedAt: string;
    createdAt: string;
}

export const categoriesMock: CategoryColumn[] = [
    {
        id: "e0c8a6e4-7b1d-4f8c-a5e3-9d2b0e3f7d6c",
        code: 122563078,
        name: "Equipamentos de informática",
        updatedAt: "01/05/2025",
        createdAt: "05/04/2025",
    },
    {
        id: "a1c9b7f3-2a4d-4df6-96f3-1a0c9e8bfb81",
        code: 155236187,
        name: "Medicamentos e Materiais Hospitalares",
        updatedAt: "28/04/2025",
        createdAt: "16/03/2025",
    },
    {
        id: "9e5c44f4-12fc-48ff-9c3a-2e15a6b3a4f0",
        code: 198764320,
        name: "Materiais de Construção e Manutenção",
        updatedAt: "03/05/2025",
        createdAt: "18/03/2025"
    },
    {
        id: "cb6722ff-9bb3-4f10-a91e-7b9675d2b01d",
        code: 178234501,
        name: "Sinalização e Equipamentos de Trânsito",
        updatedAt: "05/05/2025",
        createdAt: "17/03/2025"
    },
    {
        id: "b72d60cf-d470-4f9f-b8de-14e2d24873fd",
        code: 112578903,
        name: "Material Escolar e Educacional",
        updatedAt: "27/04/2025",
        createdAt: "10/03/2025"
    },   
];
