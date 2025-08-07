import React from 'react';

export const RenascenceLocationmap = () => {
  return (
    <section className="h-screen w-full py-8 xl:px-14 text-renascence_support overflow-hidden">
      <div className="h-full w-full bg-renascence xl:rounded-[50px] flex flex-col items-center xl:p-8 xl:px-40">
        <h2 className="text-3xl xl:text-4xl font-bold mb-6">Localização</h2>

        <div className="w-full flex-1 relative mb-10 xl:mb-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.346180486095!2d-50.39752999904089!3d-22.665438025885535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949539006727be1f%3A0x7bf02f4b24a49561!2sResidential%20Renascence%20II!5e0!3m2!1sen!2sbr!4v1754522404731!5m2!1sen!2sbr"
            className="w-full h-full xl:rounded-[40px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização do Residencial Renascence II"
          />
        </div>
      </div>
    </section>
  );
};
