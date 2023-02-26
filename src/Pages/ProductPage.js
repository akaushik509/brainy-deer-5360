import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Input, Select, Button } from "@chakra-ui/react";
import ProductCard from "../Components/ProductCard";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch all products and categories from the API
    fetch("https://grumpy-lingerie-foal.cyclic.app/prod/search?type=Mens")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        // Extract all unique categories from the products
        const uniqueCategories = [...new Set(data.map((p) => p.category))];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error(error));
  }, []);

  // Filter products by selected category and search term
  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === "" || p.category === selectedCategory) &&
      (searchTerm === "" ||
        p.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Box maxW="1200px" mx="auto" p="6">
      <Flex justify="space-between" align="center" mb="6">
        <Text fontSize="xl" fontWeight="bold">
          Products
        </Text>
        <Flex align="center">
          <Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            mr="3"
          >
            <option value="">All Categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </Select>
          <Input
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            w="300px"
            mr="3"
          />
          <Button onClick={() => setSearchTerm("")}>Clear</Button>
        </Flex>
      </Flex>
      <div className="productpage">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </Box>
  );
};

export default ProductPage;