import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import HomePageHeroWithCard from "Components/HomePageHeroWithCard";
import InfoCard from "Components/InfoCard";
import SideImageSection from "Components/SideImageSection ";
import ReversedSideImageSection from "Components/ReversedSideImageSection ";
import DynamicLinkButton from "Components/DynamicLinkButton";
export const HomePage = () => {
  const [visibleCards, setVisibleCards] = useState(4); // حالة لتتبع عدد البطاقات المراد عرضها

  const handleLoadMore = () => {
    setVisibleCards(visibleCards + 4); // زيادة عدد البطاقات المراد عرضها بواقع 8 عند النقر على الزر
  };
  const data = [
    {
      name: "الاسم 1",
      address: "العنوان 1",
      phoneNumber: "123456789",
      rating: 4,
      imageUrl:
        "https://cssdp.ca/wp-content/uploads/2020/01/Enceladus-e1579209795284.jpg",
    },
    {
      name: "الاسم 1",
      address: "العنوان 1",
      phoneNumber: "123456789",
      rating: 4,
      imageUrl:
        "https://images.fineartamerica.com/images-medium-large-5/enceladus-richard-bizley.jpg",
    },
    {
      name: "الاسم 1",
      address: "العنوان 1",
      phoneNumber: "123456789",
      rating: 4,
      imageUrl:
        "https://www.valuewalk.com/wp-content/uploads/2018/04/Super-Earths.jpg",
    },
    {
      name: "الاسم 1",
      address: "العنوان 1",
      phoneNumber: "123456789",
      rating: 4,
      imageUrl:
        "https://i.ytimg.com/vi/-uvPdvgU_Ao/maxresdefault.jpg?7857057827",
    },
    {
      name: "الاسم 1",
      address: "العنوان 1",
      phoneNumber: "123456789",
      rating: 4,
      imageUrl:
        "https://i.ytimg.com/vi/-uvPdvgU_Ao/maxresdefault.jpg?7857057827",
    },
    {
      name: "الاسم 1",
      address: "العنوان 1",
      phoneNumber: "123456789",
      rating: 4,
      imageUrl:
        "https://i.ytimg.com/vi/-uvPdvgU_Ao/maxresdefault.jpg?7857057827",
    },
    {
      name: "الاسم 1",
      address: "العنوان 1",
      phoneNumber: "123456789",
      rating: 4,
      imageUrl:
        "https://i.ytimg.com/vi/-uvPdvgU_Ao/maxresdefault.jpg?7857057827",
    },
    {
      name: "الاسم 1",
      address: "العنوان 1",
      phoneNumber: "123456789",
      rating: 4,
      imageUrl:
        "https://i.ytimg.com/vi/-uvPdvgU_Ao/maxresdefault.jpg?7857057827",
    },
    {
      name: "الاسم 1",
      address: "العنوان 1",
      phoneNumber: "123456789",
      rating: 4,
      imageUrl:
        "https://i.ytimg.com/vi/-uvPdvgU_Ao/maxresdefault.jpg?7857057827",
    },
    {
      name: "الاسم 1",
      address: "العنوان 1",
      phoneNumber: "123456789",
      rating: 4,
      imageUrl:
        "https://i.ytimg.com/vi/-uvPdvgU_Ao/maxresdefault.jpg?7857057827",
    },
    // ...أضف المزيد من الكائنات هنا لكل بطاقة تريد إنشاءها
  ];
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "200vh" }}>
      <HomePageHeroWithCard />
      <Grid container spacing={2}>
        {data.slice(0, visibleCards).map(
          (
            info,
            index // استخدم الدالة slice لقص المصفوفة إلى العدد المراد عرضه فقط
          ) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <InfoCard
                name={info.name}
                address={info.address}
                phoneNumber={info.phoneNumber}
                rating={info.rating}
                imageUrl={info.imageUrl}
              />
            </Grid>
          )
        )}
      </Grid>
      {visibleCards < data.length && ( // إظهار الزر فقط إذا كان هناك بطاقات أكثر لعرضها
        <Box display="flex" justifyContent="center" mt={2} mb={2}>
          <Button variant="contained" color="primary" onClick={handleLoadMore}>
            Load more
          </Button>
        </Box>
      )}
      <SideImageSection />
      <ReversedSideImageSection />
      <Box display="flex" justifyContent="center" mt={2} mb={2}>
        <DynamicLinkButton buttonText="مشاهدة المزيد" buttonLink="/news" />
      </Box>
    </Box>
  );
};
export default HomePage;
