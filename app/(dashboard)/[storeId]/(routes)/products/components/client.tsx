"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { ApiList } from "@/components/ui/api-list";

import { ProductColumn, columns } from "./columns";

interface ProductsClientProps {
  data: ProductColumn[];
};

export const ProductsClient: React.FC<ProductsClientProps> = ({
  data
}) => {
  const params = useParams();
  const router = useRouter();

  return (
    <> 
      <div className="flex items-center justify-between">
        <Heading title={`Товары (${data.length})`} description="Управление товарами" />
        <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Добавить
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="Вызовы API для товаров" />
      <Separator />
      <ApiList entityName="products" entityIdName="productId" />
    </>
  );
};
