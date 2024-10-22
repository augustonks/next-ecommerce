"use client";

import React from "react";

const CartModal = () => {
    const lineItems = true;

    return (
        <div className="absolute w-max right-0 top-10 text-black p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-10 flex flex-col gap-6">
            {!lineItems ? (
                <div>Carrinho vazio</div>
            ) : (
                <>
                    <h2 className="text-xl">Carrinho de compras</h2>
                    {/* LISTA */}
                    <div className="flex flex-col gap-6">
                        {/* ITEM */}
                        <div className="flex gap-5">
                            <img
                                src="https://images.pexels.com/photos/1048035/pexels-photo-1048035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                                width={72}
                                height={36}
                            />

                            <div className="flex flex-col gap-8">
                                {/* TOP */}
                                <div className="flex flex-col justify-between">
                                    {/* TITULO */}
                                    <div className="flex justify-between items-center gap-8">
                                        <h3 className="font-semibold text-sm">
                                            NOME PRODUTO
                                        </h3>
                                        <div className="p-1 bg-slate-100 rounded-sm text-sm">
                                            $30
                                        </div>
                                    </div>
                                    {/* STATUS */}
                                    <div className="bg-green-500 rounded-md w-max p-1 text-sm text-white">
                                        Disponível
                                    </div>
                                </div>
                                {/* BAIXO */}
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">
                                        Qty. 2
                                    </span>
                                    <span className="text-blue-500">
                                        Remover
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 text-sm">
                            <div className="flex justify-between">
                                <h3 className="font-semibold text-lg">Total</h3>
                                <div className="font-semibold text-lg">$30</div>
                            </div>
                            <div>
                                <span className="text-gray-700">
                                    Pagamento e taxas verificadas no checkout
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <button className="p-3 border-solid border-2 border-gray-300 rounded-lg">
                                    View Cart
                                </button>
                                <button className="p-3 bg-black text-white rounded-lg">
                                    Check Out
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartModal;
