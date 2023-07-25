import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getProducts = async (
  /** @type import('express').Request */ req,
  /** @type import('express').Response */ res,
) => {
  try {
    const product = await prisma.product.findMany();
    const response = res.status(200).json({
      status: 'success',
      data: product,
    });
    return response;
  } catch (err) {
    const response = res.status(500).json({
      status: 'fail',
      message: err.message,
    });
    return response;
  }
};


export const getProductsById = async (
/** @type import('express').Request */ req,
  /** @type import('express').Response */ res,
) => {
  const { id } = req.params;
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!product) {
      const response = res.status(200).json({
        status: 'success',
        message: 'Product not found',
      });
      return response;
    }
    const response = res.status(200).json({
      status: 'success',
      data: product,
    });
    return response;
  } catch (err) {
    const response = res.status(500).json({
      status: 'fail',
      message: err.message,
    });
    return response;
  }
};

export const createProduct = async (
  /** @type import('express').Request */ req,
  /** @type import('express').Response */ res,
) => {
  const { name, price } = req.body;
  try {
    const product = await prisma.product.create({
      data: {
        name,
        price,
      },
    });
    const response = res.status(201).json({
      status: 'success',
      data: product,
    });
    return response;
  } catch (err) {
    const response = res.status(500).json({
      status: 'fail',
      message: err.message,
    });
    return response;
  }
};

export const updateProduct = async (
  /** @type import('express').Request */ req,
  /** @type import('express').Response */ res,
) => {
  const { id } = req.params;
  const { name, price } = req.body;
  try {
    const product = await prisma.product.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        price,
      },
    });
    if (!product) {
      const response = res.status(400).json({
        status: 'fail',
        message: 'Product not found',
      });
      return response;
    }
    const response = res.status(201).json({
      status: 'fail',
      data: product,
    });
    return response;
  } catch (err) {
    const response = res.status(500).json({
      status: 'fail',
      message: err.message,
    });
    return response;
  }
};

export const deleteProduct = async (
  /** @type import('express').Request */ req,
  /** @type import('express').Response */ res,
) => {
  const { id } = req.params;
  try {
    const product = await prisma.product.delete({
      where:
            {
              id: Number(id),
            },
    });
    const response = res.status(200).json({
      status: 'success',
      message: 'Product deleted successfully',
      data: product,
    });
    return response;
  } catch (err) {
    const response = res.status(500).json({
      status: 'fail',
      message: err.message,
    });
    return response;
  }
};
